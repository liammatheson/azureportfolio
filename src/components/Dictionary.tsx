
interface Dictionary {
  dictionary: number;
  notes: string;
  icon?: string;
}

export default function WeekCard({ dictionary: dictionary, notes, icon = "" }: Dictionary) {
  return (
    <div className="week-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
        <h4> {dictionary}</h4>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <p>{notes}</p>
    </div>
  );
}