
interface PortfolioCardProps {
  title: string;
  description: string;
  link?: string;
  image: string 
}

export default function PortfolioCard({ title, description, image }: PortfolioCardProps) {
  return (
    <div className="portfolio-card">
      <img src={image} style={{ width: '100%', maxHeight: '500px', objectFit: 'contain', marginTop: '2em' }} />
      <div style={{ padding: '2rem' }}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}