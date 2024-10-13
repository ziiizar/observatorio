const AccountCard: React.FC = () => {
  return (
    <div className="relative w-full h-[50%]  overflow-hidden rounded-xl bg-burgundy-900 text-white shadow-lg">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('/configTexture.png')] bg-center bg-cover bg-no-repeat" 
        
      />
      
      {/* Card content */}
      <div className="relative p-6 space-y-4">
        <h2 className="text-2xl font-bold">Gestiona tu Cuenta</h2>
        <p className="text-sm opacity-90">
          Realiza ajustes en tu contraseña y mantén tu cuenta actualizada para
          reforzar la seguridad de todos.
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <button className="bg-white text-[#8B0000] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
            Gestionar Cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;