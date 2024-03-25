import React, { createContext, useState, useContext } from "react";

interface SoundContextType {
  bgmSoundStatus: string;
  setBgmSoundStatus: (status: string) => void;
}

const defaultState: SoundContextType = {
  bgmSoundStatus: "STOPPED",
  setBgmSoundStatus: () => {}, // 空の関数で初期化
};

const BgmContext = createContext<SoundContextType>(defaultState);

export const useBgm = () => useContext(BgmContext);

export const BgmProvider = ({ children }) => {
  const [bgmSoundStatus, setBgmSoundStatus] = useState("STOPPED");

  return (
    <BgmContext.Provider value={{ bgmSoundStatus, setBgmSoundStatus }}>
      {children}
    </BgmContext.Provider>
  );
};
