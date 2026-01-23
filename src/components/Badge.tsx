import './Badge.css';
import clsx from 'clsx';

/**
 * 상태를 표시하는 Badge 컴포넌트
 *
 * @param {Object} props - Badge 컴포넌트 props
 * @param {("success" | "pending" | "reject")} props.status - Badge의 상태 (기본값: "success")
 * @param {string} [props.label]
 */

type BadgeProps = {
  status: 'success' | 'pending' | 'reject';
  label?: string;
};

export default function Badge({ status = 'success', label }: BadgeProps) {
  return (
    <span
      className={clsx('badge', {
        'badge-success': status === 'success',
        'badge-pending': status === 'pending',
        'badge-reject': status === 'reject',
      })}
    >
      {label}
    </span>
  );
}
