export function Registros({color}:{color:string}) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="17"
        fill="none"
        viewBox="0 0 18 17"
      >
        <path
          fill={color}
          d="M1.674 16.5c-.46 0-.854-.196-1.182-.587C.165 15.522.001 15.051 0 14.5v-12c0-.55.164-1.02.492-1.412C.82.697 1.215.501 1.674.5h5.024l1.674 2h6.698c.46 0 .855.196 1.183.588.328.392.492.863.491 1.412H1.674v10l2.01-8H18l-2.156 8.575c-.111.433-.317.78-.617 1.038-.3.259-.631.388-.994.387H1.674z"
        ></path>
      </svg>
    );
  }


  export function Patentes({color}:{color:string}) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="17"
        fill="none"
        viewBox="0 0 20 17"
      >
        <path
          fill={color}
          d="M1.667.5h16.666C19.208.5 20 1.344 20 2.278v12.444c0 .934-.792 1.778-1.667 1.778H1.667C.792 16.5 0 15.656 0 14.722V2.278C0 1.344.792.5 1.667.5zm10 2.667v.889h6.666v-.89h-6.666zm0 1.777v.89h6.666v-.89h-6.666zm0 1.778v.89H17.5v-.89h-5.833zm-5 3.476c-1.667 0-5 .969-5 2.746v.89h10v-.89c0-1.777-3.334-2.746-5-2.746zm0-7.031c-.663 0-1.3.28-1.768.78a2.76 2.76 0 00-.732 1.886c0 .708.263 1.386.732 1.886s1.105.781 1.768.781 1.299-.281 1.767-.781a2.76 2.76 0 00.733-1.886 2.76 2.76 0 00-.733-1.885 2.423 2.423 0 00-1.767-.781z"
        ></path>
      </svg>
    );
  }



  export function Visualizacion({color}:{color:string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill={color}>
        <path d="M0 0.5H2V14.7222H18V16.5H0V0.5ZM4 12.9444V5.83333H8V12.9444H4ZM9 12.9444V2.27778H13V12.9444H9ZM14 12.9444V8.5H18V12.9444H14Z" fill={color}/>
      </svg>
    );
  }