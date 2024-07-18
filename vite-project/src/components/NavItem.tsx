import Link from "@mui/material/Link";
interface Props {
  children: string;
  link: string;
}

function NavItem({ children, link }: Props) {
  return <Link href={link}> {children} </Link>;
}

export default NavItem;
