import React from "react";

const SkillCard = () => {
  return (
    <>
      <div className="bg-[var(--sidebar-color)] px-8 py-10 border-transparent border hover:border-[var(--primary-color)] hover:border hover:bg-transparent transition-all duration-300">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgB3ZY/TFNBHMd/d31QS2NRQ0lIMFQYjG0iCgwSE6RxUGKE1srgoDFxcQN1kUTTmpjgYgJxYXHRUasFo5XBSIwJJipUozUMYot/kw780Za2tD3vd/rqey8dpH3twHe5u3e//j73u/vdr0dAo+MPhrvBQPsYgIsA2KAYMQgRSkJryeyVgHsoopwicsd137dFMpq8vDsIuoqOZFJxDvYt5YECVm16ykd7oBziEWfSq06EUhyLyMoFQ3HfktHsFV1XcNgmMfoJKqFszkkNYPBChcQocVGSY+XbSo0oIX20rGenEb9qNgoV1sYHSusxPrx9L/Q0tYn+1Vd3IJZcEX2ryQLHdnSCfVsjmCUjxFZXILgwA8++h0sDmquMYN1kUX1D2KW2ftHKatpshbOOQ8I+uDBbPLCQ2uta8rDg51mIJZbFLmCkhVQy0GaxijaRScHtuSnRfx37KFp5y5UqOWniaynR1vCIPM2deVAhmC5AZWJ4mvfB6P4zcHJnt+pMdQVGf8bg+psJVcb28GzGROqob9EfiMIzw2sy9n5SBT6/uxd2bW3UH4hCEG7vwPOb4J+fzn8/0GD/f2ANv0d2zQq1wkjwzNBWln/+hchaVJ2pVmUv8QoeKfRY6uIrO8UdoW7xdMcIuhocYozOcIzbdaG1V2RoB7+PY+FJMYd2NX/vYfRXTOGVhCRgbBwIGdACZUP8IVYNpeTq8WHxiyhjWFkw0svt/So7hD+OzvzDkVzI4DhxMMn/GU9rgcvpBEz/mOPO6kWJqqKSiOoeP5+JyMu83ZOvb+HP1taqqkuYL+bGu0fwLbGY/5ZJMbd4tXkeXhshBaJcr+Q6G+eRyWcoizE26j9ycVAkTTZt9OFTDkqUXGG0MPSdTSd92BXAgPvcUiZd7cRVgM5Cn/KbFMdEa4DPRgMDH2G0tdj3DmY+sNw4yUHg7tGhKeXcbzpZEn9oiIUkAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>

        <div className="mt-4">
          <h2 className="font-medium text-[20px]">Vanilla JavaScript</h2>
          <p className="text-[17px] mt-2 mb-0">
            List skills and technologies here. Customize as needed. Built on
            HTML5, Sass, and Bootstrap 5.
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
