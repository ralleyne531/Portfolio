import React, { useState } from "react";
import styled from "styled-components";

const ContactButton = styled.button`
  width: 8%;
  height: 25%;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s;

  /* Open for Work (Green & Bright) */
  background: ${({ open }) => (open ? "#4CAF50" : "#888")};
  color: ${({ open }) => (open ? "white" : "#ccc")};
  box-shadow: ${({ open }) =>
          open ? "0px 4px 6px rgba(0, 128, 0, 0.3)" : "none"};

  &:hover {
    background: ${({ open }) => (open ? "#45a049" : "#777")};
  }
`;

// Main Component
const ContactStatus = () => {
    const [isOpen, setIsOpen] = useState(true); // Default: Open for Work

    return (
        <ContactButton open={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Open for Work" : "Closed for Work"}
        </ContactButton>
    );
};

export default ContactStatus;
