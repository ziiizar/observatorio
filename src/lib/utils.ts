import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
import { Registros } from "@/types/registro";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const axiosInstance = axios.create(
    {
        baseURL:"http://127.0.0.1:8000/",
        withCredentials: true
    }
)


export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};


export const formatRegistros = (item: Registros) => {
  const data = JSON.parse(item.metadata);

  const formattedRegistros = {
    title: data._map?.title[0],
    creators: data._map?.creator.join(", "),
    subject: data._map?.subject.join(", "),
    description: data._map?.description[0],
    publisher: data._map?.publisher[0],
    date: data._map?.date[0],
    type: data._map?.type.join(", "),
    format: data._map?.format[0],
    identifier: data._map?.identifier[0],
    language: data._map?.language[0],
    rights: data._map?.rights[0],
    source: data._map?.source[0],
    relation: data._map?.relation[0],
    id: item.id
  };

  return formattedRegistros;
};