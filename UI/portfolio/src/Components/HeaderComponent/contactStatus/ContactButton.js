import React from "react";
import styled from "styled-components";

const ContactButton = styled.button`
  width: 88px;
  height: 56px;
  border-radius: 17px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s;

  /* Open for Work (Green & Bright) */
  background: ${({ open }) => (open ? "radial-gradient(#4CAF50,#45a049)" : "#888")};
  color: ${({ open }) => (open ? "white" : "#ccc")};
  box-shadow: ${({ open }) =>
          open ? "0px 4px 6px rgba(0, 128, 0, 0.3)" : "none"};

  &:hover {
    background: ${({ open }) => (open ? "#45a049" : "#777")};
  }
`;

// Main Component
const ContactStatus = () => {
    let isOpen = true;
    // const [isOpen, setIsOpen] = useState(true); // Default: Open for Work

    return (
        <a href={"mailto:ralleyne531@gmail.com"} target={"_blank"} rel={"noreferrer"} style={{textDecoration:0,marginRight:"65%"}}> <ContactButton open={isOpen}>
            {isOpen ? "Open to Work" : "Unavailable for Work"}
        </ContactButton></a>
    );
};

export default ContactStatus;
