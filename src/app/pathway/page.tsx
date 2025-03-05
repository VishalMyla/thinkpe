// import CareerPathButton from "../components/CareerPathButton";
"use client"
import HeaderL from "../components/HeaderL";
import AccountInfoForm from "../components/Pathway/AccountInfoForm";
import CareerPathway from "../components/Pathway/CareerPathway";
import StatusSelection from "../components/Pathway/StatusSelection";

export default function Pathway() {
  return (
    <>
      <HeaderL/>
      <CareerPathway/>
      <StatusSelection/>
      <AccountInfoForm/>
    </>
  );

}