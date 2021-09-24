import React, { useEffect } from "react";
import Landing from "../components/pages/Landing";
import { useDispatch } from 'react-redux'
import { SetNavbarTheme } from "../store/Actions/SharedActions";

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SetNavbarTheme(false))
  }, [])

  return (
    <Landing />
  );
}
