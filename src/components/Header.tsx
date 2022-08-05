import React from "react";

interface IHeaderProps {
  name: string;
}
const Header: React.FC<IHeaderProps> = (props) => {

  const {name} = props
  return <h1>Hello {name}!</h1>
}

export default Header