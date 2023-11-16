import React from "react";
import { Skeleton } from "@mui/material";

function SkeletonListe() {
  return (
    <div>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </div>
  );
}

export default SkeletonListe;
