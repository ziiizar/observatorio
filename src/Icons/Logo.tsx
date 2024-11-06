import { cn } from "@/lib/utils";

function Logo({className, fill}:{className:string, fill:string} ) {
  return (
    <svg
    className={cn('', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="40"
      version="1"
      viewBox="0 0 349 272"
      fill={fill}
    >
      <path d="M313 76.6c-1.4.2-9 .8-17 1.3-28.3 1.9-70 14.6-103.7 31.7-8.1 4.1-15.4 7.4-16.3 7.4-2.8 0-3.7-2-4.4-10-1-12.1-2.4-21.2-3.4-22.2-1.4-1.4-23.6 2.4-43.7 7.4-18.8 4.7-46.3 14.7-62.5 22.7-13.8 6.8-33.1 18.8-45.8 28.5-5.2 3.9-10.9 8.2-12.8 9.6l-3.3 2.5-.1 26.9c0 25.4.1 26.8 1.8 25.5.9-.7 5.5-5 10.2-9.4 19.7-18.7 37.7-31.4 61.7-43.4 16.7-8.3 37.4-16 55.6-20.7 15.9-4 16.7-3.1 17.8 17.6.4 8.2 1 15.3 1.3 15.8.2.4 5.6-4.2 11.8-10.3 21.8-21.4 41.6-35.4 69.3-49 20.5-10.1 32-14.4 51.9-19.5 16-4.1 42.3-8.5 56.9-9.6 13.8-1.1 9.2-2.8-8-3-8.2-.1-15.9 0-17.3.2z"></path>
      <path d="M298.5 97.1c-37.6 8.5-63.8 19.4-92.9 38.6-19.3 12.9-33.9 25.7-55.7 49.2-5.6 5.9-10.3 10.1-11 9.9-1-.3-1.9-5.3-3.1-17.9-.9-9.6-1.7-19.7-1.7-22.5-.1-2.7-.7-5.8-1.3-6.7-1.2-1.6-1.8-1.6-9.1.3-17.7 4.6-45.3 16.8-62.7 27.6-10.7 6.6-26.5 18.6-28.4 21.7-1.1 1.8-1.5 9-1.8 36.4-.3 30.3-.1 34.4 1.3 35.8 1.4 1.5 10.9 1.6 95.9 1.5 56.2 0 97.2-.5 101.4-1 12.9-1.8 24-5.1 34.1-10 8.4-4.2 21.9-12.9 21.1-13.7-.1-.2-1.8.2-3.7.7-5.6 1.6-16 1.2-22.5-1-3.3-1.2-10.8-5.4-17.4-9.9-41.7-28.7-47.4-32.1-54-32.1-4.7 0-12.4 5-27 17.5-7.7 6.6-16.6 13.5-19.8 15.2-10.3 5.9-19.1 4-27.4-5.8-4.9-5.8-8.4-7.9-12.8-7.9-4.3 0-5.8.9-19.3 12.2-6.6 5.4-12.7 9.8-13.6 9.8-.9 0-3.4-1.8-5.6-4-5-5.1-4.5-6.5 6-15.9 10.6-9.5 21.4-16.7 26.3-17.6 7.8-1.3 11.8.8 21.7 11 9 9.3 12.2 11.3 16.8 10.1 3.6-.9 10.9-6.1 22.9-16.5 29.4-25.3 34-28.3 45-28.9 11.3-.7 14.7 1.1 45.3 23.3 18.3 13.2 21.3 14.8 30.5 15.3 21.2 1.2 38.5-11 41.9-29.6.5-2.6 1.1-25.5 1.3-51 .2-40.2.1-46.4-1.2-47.2-.8-.5-1.7-.9-2-.9-.3.1-8.1 1.8-17.5 4z"></path>
    </svg>
  );
}

export default Logo;