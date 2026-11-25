/** B2 Profile 专用 · 单字段 Label + Value（未入库组件库） */
export type ProfileFieldStackProps = {
  label: string;
  value: string;
  span?: 1 | 2;
};

export function ProfileFieldStack({ label, value, span = 1 }: ProfileFieldStackProps) {
  return (
    <div
      className={
        span === 2 ? "pt-profile-field pt-profile-field--span-2" : "pt-profile-field"
      }
    >
      <span className="pt-profile-field__label">{label}</span>
      <span className="pt-profile-field__value">{value}</span>
    </div>
  );
}