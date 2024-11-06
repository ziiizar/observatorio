export type Links = {
    name: string,
    href: string,
    icon: (props: React.SVGProps<SVGSVGElement> & { color: string }) => JSX.Element;
}