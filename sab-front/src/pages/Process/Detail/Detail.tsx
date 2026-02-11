import useCustomStore from "@/store/useCustomStore";

export default function Detail() {
  const { selectedComponentPositions } = useCustomStore();
  console.log(selectedComponentPositions);
  return <>DETAIL</>;
}
