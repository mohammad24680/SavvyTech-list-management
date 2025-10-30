// components/MetaTags.tsx
import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title: string;
  description?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default MetaTags;
