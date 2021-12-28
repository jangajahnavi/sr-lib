import React from "react";
declare const SearchBox: (props: {
    placeholder: string | undefined;
    handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
    handleOnClick: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClick: React.MouseEventHandler<SVGSVGElement> | undefined;
}) => JSX.Element;
export default SearchBox;
