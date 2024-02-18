import React from "react";
import { Link } from "react-router-dom";
import Accordion from "src/components/Accordion";

export default function SubItem({ item }) {
  return (
    <ul className="overflow-hidden">
      <li>
        {
          !item.subs &&
          (
            <Link to={item.to}>
              <div className="flex gap-1 w-full cursor-pointer select-none items-center p-2 rounded-md hover:bg-gray-100 text-sm">
                <span>
                  {item.icon}
                </span>
                <span>
                  {item.label}
                </span>
              </div>
            </Link>
          )
        }
        {
          item.subs && item.subs.length > 0 &&
          (
            <Accordion title={item.label} icon={item.icon}>
              <div className="flex flex-col gap-1">
                {item.subs.map((sub, idx) => (
                  <SubItem item={sub} key={idx} />
                ))}
              </div>
            </Accordion>
          )
        }
      </li>
    </ul>
  );
}
