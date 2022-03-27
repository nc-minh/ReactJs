import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#fff",
    height: 48,
    padding: "0 30px",
  },
});

const CounterFeature = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncreaseClick = () => {
    const action = increase(1);
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(1);
    console.log(action);
    dispatch(action);
  };
  return (
    <div>
      CounterFeature {counter}
      <Button className={classes.root} onClick={handleIncreaseClick}>
        Increase
      </Button>
      <Button className={classes.root} onClick={handleDecreaseClick}>
        Decrease
      </Button>
    </div>
  );
};

export default CounterFeature;
