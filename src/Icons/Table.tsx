import { cn } from "@/lib/utils";

export function ArrowRight() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M15.707 11.292a1 1 0 010 1.414l-5.657 5.657a1 1 0 11-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 011.414-1.414l5.657 5.657z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }
  

  export function ArrowLeft() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M8.293 12.708a1 1 0 010-1.414l5.657-5.657a1 1 0 111.414 1.414l-4.95 4.95 4.95 4.95a1 1 0 01-1.414 1.414l-5.657-5.657z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  export function ExportIcon({className}:{className:string}) {
    return (
      <svg
      className={cn('fill-burgundy-900  group-hover:fill-white transition-all duration-200 ease-in-out', className)}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="17"
        viewBox="0 0 18 17"
      >
        <path
          d="M13.5 14.449H1.8V5.217h2.336s.62-.919 1.952-2.051H.9a.848.848 0 00-.636.3A1.103 1.103 0 000 4.192v11.282c0 .272.095.533.264.726.168.192.397.3.636.3h13.5a.848.848 0 00.636-.3c.17-.193.264-.454.264-.726v-3.842l-1.8 1.687v1.13zm-1.475-7.13v3.643L18 5.628 12.025.5v3.211c-7.255 0-7.255 8.173-7.255 8.173C6.824 8.04 8.087 7.32 12.025 7.32z"
        ></path>
      </svg>
    );
  }
  


  export function DeleteIcon({className}:{className:string}) {
    return (
      <svg
      className={cn('fill-burgundy-900  transition-all duration-200 ease-in-out', className)}
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="8"
        viewBox="0 0 9 8"
        
      >
        <path
        
          fillRule="evenodd"
          d="M1.482.16a.571.571 0 00-.808.808L3.7 3.993.674 7.018a.571.571 0 10.808.808L4.507 4.8l3.025 3.025a.571.571 0 00.808-.808L5.315 3.993 8.34.968A.571.571 0 007.532.16L4.507 3.185 1.482.16z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }
  

  export function EditIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="8"
        className='fill-burgundy-900 group-hover:fill-white transition-all duration-200 ease-in-out'
        viewBox="0 0 9 8"
      >
        <path
          d="M.5 8V6.111L6.367.256a.998.998 0 01.294-.19.922.922 0 01.683 0 .776.776 0 01.29.2l.61.623a.728.728 0 01.195.289.952.952 0 010 .672.823.823 0 01-.195.294L2.39 8H.5zm6.489-5.867l.622-.622L6.99.89l-.622.622.622.622z"
        ></path>
      </svg>
    );
  }