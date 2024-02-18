import { useQuery } from "@tanstack/react-query";
import FullscreenLoader from "../components/common/fullscreenLoader";
import PublicLayout from "../components/common/publicLayout";
import { QUERY_TERMS } from "../utils/constants";
import { fetchTerms } from "../services";

const Terms = () => {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_TERMS],
    queryFn: fetchTerms,
  });

  if (isPending) return <FullscreenLoader />;

  return (
    <PublicLayout className="terms">
      <main className="main">
        <div className="container">
          <h1 className="terms-heading">{data?.terms}</h1>
          <button className="btn-primary back-button">
            {data?.buttonText}
          </button>
          <div className="terms-content">
            {data?.texts?.map((text) => (
              <p
                key={text.id}
                dangerouslySetInnerHTML={{ __html: text.description }}
              />
            ))}
          </div>
          <button className="btn-primary back-button">
            {data?.buttonText}
          </button>
        </div>
      </main>
    </PublicLayout>
  );
};

export default Terms;
