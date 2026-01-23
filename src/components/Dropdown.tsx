"use client";

import Image from "next/image";
import ArrowCloseIcon from "@/assets/icons/arrow-close.svg";
import "./Dropdown.css";

/* 드롭다운 Props 타입 정의 */
type DropdownProps = {
  items?: string[];
  placeholder?: string;
  status?: "default" | "disabled";
};

export default function Dropdown({
  items = ["item1", "item2", "item3"],
  placeholder = "item을 선택해주세요",
  status = "default",
}: DropdownProps) {
  const isDisabled = status === "disabled";

  return (
    <div className="dropdown-container">
      {/* 드롭다운 선택 버튼 */}
      <button
        disabled={isDisabled}
        className={`dropdown-select ${isDisabled ? "dropdown-select-disabled" : ""} gap-5`}
      >
        <p className="dropdown-select-text">{placeholder}</p>
        <Image
          src={ArrowCloseIcon}
          alt="arrow"
          width={20}
          height={20}
          className="dropdown-icon"
        />
      </button>

      {/* 드롭다운 메뉴 */}
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item} className="dropdown-items">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
