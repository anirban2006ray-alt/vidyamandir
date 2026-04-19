import { useActor } from "@caffeineai/core-infrastructure";

export { useActor };

// Helper to safely convert bigint from backend
export function toNumber(value: bigint): number {
  return Number(value);
}

export function toPaisa(rupees: number): bigint {
  return BigInt(Math.round(rupees * 100));
}

export function fromPaisa(paisa: bigint): number {
  return Number(paisa) / 100;
}
