// Polar API types
export interface PolarBenefit {
  id?: string;
  description?: string;
}

export interface PolarPrice {
  type: "recurring" | "one_time";
  price_amount?: number;
  recurring_interval?: string;
}

export interface PolarProduct {
  id?: string;
  name?: string;
  description?: string;
  type?: string;
  prices?: PolarPrice[];
  benefits?: PolarBenefit[];
  features?: PolarBenefit[];
}

export interface PolarSubscription {
  id: string;
  status: string;
  customer?: {
    email?: string;
  };
  current_period_start?: string;
  current_period_end?: string;
  cancel_at_period_end?: boolean;
  canceled_at?: string;
  ended_at?: string;
  product_id?: string;
}

export interface PolarCustomer {
  id: string;
  email: string;
  name?: string;
}

// Webhook payload types
export interface WebhookPayload {
  data?: {
    id?: string;
    status?: string;
    customer_email?: string;
    customer?: {
      email?: string;
    };
    subscription_id?: string;
    productId?: string;
  };
}

// Local database types
export interface SubscriptionPlanData {
  id: string;
  polarProductId: string;
  name: string;
  description?: string;
  type: string;
  priceAmount: number;
  currency: string;
  interval?: string;
  isActive: boolean;
  benefits: SubscriptionPlanBenefitData[];
}

export interface SubscriptionPlanBenefitData {
  id: string;
  name: string;
  description?: string;
  type?: string;
  value?: string;
}

export interface SubscriptionData {
  id: string;
  polarSubscriptionId: string;
  polarCustomerId?: string | null;
  status: string;
  currentPeriodStart?: Date | null;
  currentPeriodEnd?: Date | null;
  cancelAtPeriodEnd: boolean;
  canceledAt?: Date | null;
  endedAt?: Date | null;
  planId: string;
  teamId: string;
}
