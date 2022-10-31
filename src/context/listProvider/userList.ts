import { useContext } from "react";
import {  ListContext } from ".";

export const useList = () => {
  const context = useContext(ListContext);
  return context;
};
