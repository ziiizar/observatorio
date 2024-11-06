import { jest } from '@jest/globals';
import { insertFuente, updateFuente, deleteFuente, startMonitoring, stopMonitoring } from '../../services/fuente';
import { routes } from "../../constants/routes";
import { revalidatePath } from 'next/cache';
import { axiosInstance } from '@/lib/utils';

// Mock the dependencies
jest.mock('../../lib/utils', () => ({
  axiosInstance: {
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    get: jest.fn(),
  },
}));

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}));

// Import the mocked axiosInstance


describe('Fuente Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('insertFuente', () => {
    it('should insert a fuente successfully', async () => {
      const mockData = {
        editores: ['editor1', 'editor2'],
        frequency: 3,
        id_eje: 1,
        is_monitoring: true,
        materia: 'test materia',
        organization: 'test org',
        title: 'Test Fuente',
        url: 'http://test.com',
      };

      axiosInstance.post.mockResolvedValue({ data: 'success' });

      const result = await insertFuente(mockData);

      expect(axiosInstance.post).toHaveBeenCalledWith('insert-fuente', mockData);
      expect(revalidatePath).toHaveBeenCalledWith(routes.adminFuentes);
      expect(result).toEqual({ success: 'Fuente insertada' });
    });

    it('should handle errors when inserting a fuente', async () => {
      const mockData = {
        editores: ['editor1'],
        frequency: 'weekly',
        id_eje: 2,
        is_monitoring: false,
        materia: 'test materia 2',
        organization: 'test org 2',
        title: 'Test Fuente 2',
        url: 'http://test2.com',
      };

      axiosInstance.post.mockRejectedValue(new Error('Network error'));

      const result = await insertFuente(mockData);

      expect(axiosInstance.post).toHaveBeenCalledWith('insert-fuente', mockData);
      expect(result).toEqual({ error: 'Error' });
    });
  });

  describe('updateFuente', () => {
    it('should update a fuente successfully', async () => {
      const mockData = {
        id: 1,
        editores: ['editor1', 'editor2'],
        frequency: 'daily',
        id_eje: 1,
        is_monitoring: true,
        materia: 'updated materia',
        organization: 'updated org',
        title: 'Updated Fuente',
        url: 'http://updated.com',
      };

      axiosInstance.put.mockResolvedValue({ data: 'success' });

      const result = await updateFuente(mockData);

      expect(axiosInstance.put).toHaveBeenCalledWith('edit-fuente', mockData);
      expect(revalidatePath).toHaveBeenCalledWith(routes.adminFuentes);
      expect(result).toEqual({ success: 'Fuente Editada' });
    });

    it('should handle errors when updating a fuente', async () => {
      const mockData = {
        id: 2,
        editores: ['editor1'],
        frequency: 'monthly',
        id_eje: 3,
        is_monitoring: false,
        materia: 'test materia 3',
        organization: 'test org 3',
        title: 'Test Fuente 3',
        url: 'http://test3.com',
      };

      axiosInstance.put.mockRejectedValue(new Error('Network error'));

      const result = await updateFuente(mockData);

      expect(axiosInstance.put).toHaveBeenCalledWith('edit-fuente', mockData);
      expect(result).toEqual({ error: 'Error' });
    });
  });

  describe('deleteFuente', () => {
    it('should delete a fuente successfully', async () => {
      const mockData = { id: 1 };

      axiosInstance.delete.mockResolvedValue({ data: 'success' });

      const result = await deleteFuente(mockData);

      expect(axiosInstance.delete).toHaveBeenCalledWith('delete-fuente/1');
      expect(revalidatePath).toHaveBeenCalledWith(routes.adminFuentes);
      expect(result).toEqual({ success: 'Fuente Eliminada' });
    });

    it('should handle errors when deleting a fuente', async () => {
      const mockData = { id: 2 };

      axiosInstance.delete.mockRejectedValue(new Error('Network error'));

      const result = await deleteFuente(mockData);

      expect(axiosInstance.delete).toHaveBeenCalledWith('delete-fuente/2');
      expect(result).toEqual({ error: 'Error' });
    });
  });

  describe('startMonitoring', () => {
    it('should start monitoring successfully', async () => {
      const fuenteId = 1;
      const result = await startMonitoring(fuenteId);

      // Since the actual API call is commented out, we're just checking the return value
      expect(result).toEqual({ succes: 'Fuente monitoreada' });
    });
  });

  describe('stopMonitoring', () => {
    it('should stop monitoring successfully', async () => {
      const fuenteId = 1;
      const result = await stopMonitoring(fuenteId);

      // Since the actual API call is commented out, we're just checking the return value
      expect(result).toEqual({ succes: 'Monitoreo detenido' });
    });
  });
});

