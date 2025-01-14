// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payment-adjustment-reason|4.0.1

/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 */
export const PaymentAdjustmentReasonCodes = {
  /**
   * a001: Prior Payment Reversal
   */
  PriorPaymentReversal: "a001",
  /**
   * a002: Prior Overpayment
   */
  PriorOverpayment: "a002",
} as const;

/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 */
export type PaymentAdjustmentReasonCodeType = typeof PaymentAdjustmentReasonCodes[keyof typeof PaymentAdjustmentReasonCodes];
