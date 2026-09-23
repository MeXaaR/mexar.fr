/** Weekly team capacity recovered from a process; target is an estimate, not a guarantee. */
export function calculateCapacity({people, currentHours, targetHours, rate}) {
  if (![people, currentHours, targetHours, rate].every(Number.isFinite) || people < 1 || currentHours < 0 || targetHours < 0 || rate < 0) {
    throw new RangeError('Invalid capacity inputs');
  }
  const hours = people * Math.max(0, currentHours - targetHours);
  const annualValue = hours * rate * 52;
  return {hours, monthlyValue: annualValue / 12, annualValue};
}
