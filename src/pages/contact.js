import { useRouter } from "next/router";
export default function contact() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2>Contact</h2>
      <p>{id}</p>
    </div>
  );
}
