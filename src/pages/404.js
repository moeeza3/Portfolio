import { useRouter } from "next/router";
const ErrorPage = () => {
  const router = useRouter();
  const href = "/";
  return (
    <div>
      this $04 page yor page not found.
      <button type="button" onClick={() => router.push(href)}>
        Click me
      </button>
    </div>
  );
};

export default ErrorPage;
