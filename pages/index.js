import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../store/actions";
import Landing from "./landing";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  
  const getCount = () => {
    dispatch(incrementCount());
    console.log(count);
  }
  return ( <> 
     <Landing />
     </>
  );
}
