import React, { useState } from "react";
import "./Tabs.css";

export const Tabs = ({ tabs = [], defaultTab = 0, variant = "default" }) => {
  const [active, setActive] = useState(defaultTab);

  return (
    <div className={`tabs tabs--${variant}`}>
      <div className="tabs__list" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={`tabs__tab${active === i ? " tabs__tab--active" : ""}`}
            onClick={() => setActive(i)}
            disabled={tab.disabled}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="tabs__count">{tab.count}</span>
            )}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">
        {tabs[active]?.content}
      </div>
    </div>
  );
};

export default Tabs;
