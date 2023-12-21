import React from "react";
import { Switch } from "@headlessui/react";

export default function Pricingtoggle({ enabled, setEnabled }) {
  return (
    <div>
      <div className="flex items-center">
        <span className={`font-bold mr-2 ${enabled ? "text-gray-500/60" : ""}`}>
          Monthly
        </span>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-[#F2B53C]" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <span className={`font-bold ml-2 ${enabled ? "" : "text-gray-500/60"}`}>
          Yearly
        </span>
      </div>
    </div>
  );
}
