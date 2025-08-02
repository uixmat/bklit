
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model SubscriptionPlanBenefit
 * 
 */
export type SubscriptionPlanBenefit = $Result.DefaultSelection<Prisma.$SubscriptionPlanBenefitPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model PageViewEvent
 * 
 */
export type PageViewEvent = $Result.DefaultSelection<Prisma.$PageViewEventPayload>
/**
 * Model EventDefinition
 * 
 */
export type EventDefinition = $Result.DefaultSelection<Prisma.$EventDefinitionPayload>
/**
 * Model TrackedEvent
 * 
 */
export type TrackedEvent = $Result.DefaultSelection<Prisma.$TrackedEventPayload>
/**
 * Model TrackedSession
 * 
 */
export type TrackedSession = $Result.DefaultSelection<Prisma.$TrackedSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlanBenefit`: Exposes CRUD operations for the **SubscriptionPlanBenefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlanBenefits
    * const subscriptionPlanBenefits = await prisma.subscriptionPlanBenefit.findMany()
    * ```
    */
  get subscriptionPlanBenefit(): Prisma.SubscriptionPlanBenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageViewEvent`: Exposes CRUD operations for the **PageViewEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageViewEvents
    * const pageViewEvents = await prisma.pageViewEvent.findMany()
    * ```
    */
  get pageViewEvent(): Prisma.PageViewEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventDefinition`: Exposes CRUD operations for the **EventDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventDefinitions
    * const eventDefinitions = await prisma.eventDefinition.findMany()
    * ```
    */
  get eventDefinition(): Prisma.EventDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackedEvent`: Exposes CRUD operations for the **TrackedEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedEvents
    * const trackedEvents = await prisma.trackedEvent.findMany()
    * ```
    */
  get trackedEvent(): Prisma.TrackedEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackedSession`: Exposes CRUD operations for the **TrackedSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedSessions
    * const trackedSessions = await prisma.trackedSession.findMany()
    * ```
    */
  get trackedSession(): Prisma.TrackedSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Team: 'Team',
    TeamMember: 'TeamMember',
    Site: 'Site',
    SubscriptionPlan: 'SubscriptionPlan',
    SubscriptionPlanBenefit: 'SubscriptionPlanBenefit',
    Subscription: 'Subscription',
    PageViewEvent: 'PageViewEvent',
    EventDefinition: 'EventDefinition',
    TrackedEvent: 'TrackedEvent',
    TrackedSession: 'TrackedSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "team" | "teamMember" | "site" | "subscriptionPlan" | "subscriptionPlanBenefit" | "subscription" | "pageViewEvent" | "eventDefinition" | "trackedEvent" | "trackedSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlanBenefit: {
        payload: Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanBenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanBenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanBenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanBenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanBenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanBenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanBenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanBenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanBenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanBenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanBenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanBenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanBenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanBenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanBenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanBenefitPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanBenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlanBenefit>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanBenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanBenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanBenefitCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanBenefitCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      PageViewEvent: {
        payload: Prisma.$PageViewEventPayload<ExtArgs>
        fields: Prisma.PageViewEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageViewEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageViewEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>
          }
          findFirst: {
            args: Prisma.PageViewEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageViewEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>
          }
          findMany: {
            args: Prisma.PageViewEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>[]
          }
          create: {
            args: Prisma.PageViewEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>
          }
          createMany: {
            args: Prisma.PageViewEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageViewEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>[]
          }
          delete: {
            args: Prisma.PageViewEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>
          }
          update: {
            args: Prisma.PageViewEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>
          }
          deleteMany: {
            args: Prisma.PageViewEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageViewEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageViewEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>[]
          }
          upsert: {
            args: Prisma.PageViewEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewEventPayload>
          }
          aggregate: {
            args: Prisma.PageViewEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageViewEvent>
          }
          groupBy: {
            args: Prisma.PageViewEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageViewEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageViewEventCountArgs<ExtArgs>
            result: $Utils.Optional<PageViewEventCountAggregateOutputType> | number
          }
        }
      }
      EventDefinition: {
        payload: Prisma.$EventDefinitionPayload<ExtArgs>
        fields: Prisma.EventDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>
          }
          findFirst: {
            args: Prisma.EventDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>
          }
          findMany: {
            args: Prisma.EventDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>[]
          }
          create: {
            args: Prisma.EventDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>
          }
          createMany: {
            args: Prisma.EventDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventDefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>[]
          }
          delete: {
            args: Prisma.EventDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>
          }
          update: {
            args: Prisma.EventDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.EventDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventDefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>[]
          }
          upsert: {
            args: Prisma.EventDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDefinitionPayload>
          }
          aggregate: {
            args: Prisma.EventDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventDefinition>
          }
          groupBy: {
            args: Prisma.EventDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventDefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<EventDefinitionCountAggregateOutputType> | number
          }
        }
      }
      TrackedEvent: {
        payload: Prisma.$TrackedEventPayload<ExtArgs>
        fields: Prisma.TrackedEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>
          }
          findFirst: {
            args: Prisma.TrackedEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>
          }
          findMany: {
            args: Prisma.TrackedEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>[]
          }
          create: {
            args: Prisma.TrackedEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>
          }
          createMany: {
            args: Prisma.TrackedEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackedEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>[]
          }
          delete: {
            args: Prisma.TrackedEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>
          }
          update: {
            args: Prisma.TrackedEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>
          }
          deleteMany: {
            args: Prisma.TrackedEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackedEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>[]
          }
          upsert: {
            args: Prisma.TrackedEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEventPayload>
          }
          aggregate: {
            args: Prisma.TrackedEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackedEvent>
          }
          groupBy: {
            args: Prisma.TrackedEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackedEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedEventCountArgs<ExtArgs>
            result: $Utils.Optional<TrackedEventCountAggregateOutputType> | number
          }
        }
      }
      TrackedSession: {
        payload: Prisma.$TrackedSessionPayload<ExtArgs>
        fields: Prisma.TrackedSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>
          }
          findFirst: {
            args: Prisma.TrackedSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>
          }
          findMany: {
            args: Prisma.TrackedSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>[]
          }
          create: {
            args: Prisma.TrackedSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>
          }
          createMany: {
            args: Prisma.TrackedSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackedSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>[]
          }
          delete: {
            args: Prisma.TrackedSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>
          }
          update: {
            args: Prisma.TrackedSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>
          }
          deleteMany: {
            args: Prisma.TrackedSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackedSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>[]
          }
          upsert: {
            args: Prisma.TrackedSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSessionPayload>
          }
          aggregate: {
            args: Prisma.TrackedSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackedSession>
          }
          groupBy: {
            args: Prisma.TrackedSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackedSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TrackedSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    team?: TeamOmit
    teamMember?: TeamMemberOmit
    site?: SiteOmit
    subscriptionPlan?: SubscriptionPlanOmit
    subscriptionPlanBenefit?: SubscriptionPlanBenefitOmit
    subscription?: SubscriptionOmit
    pageViewEvent?: PageViewEventOmit
    eventDefinition?: EventDefinitionOmit
    trackedEvent?: TrackedEventOmit
    trackedSession?: TrackedSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    teamMemberships: number
    sites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    teamMemberships?: boolean | UserCountOutputTypeCountTeamMembershipsArgs
    sites?: boolean | UserCountOutputTypeCountSitesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    sites: number
    subscriptions: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    sites?: boolean | TeamCountOutputTypeCountSitesArgs
    subscriptions?: boolean | TeamCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    pageViewEvents: number
    eventDefinitions: number
    trackedEvents: number
    trackedSessions: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageViewEvents?: boolean | SiteCountOutputTypeCountPageViewEventsArgs
    eventDefinitions?: boolean | SiteCountOutputTypeCountEventDefinitionsArgs
    trackedEvents?: boolean | SiteCountOutputTypeCountTrackedEventsArgs
    trackedSessions?: boolean | SiteCountOutputTypeCountTrackedSessionsArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountPageViewEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewEventWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountEventDefinitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventDefinitionWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountTrackedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedEventWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountTrackedSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedSessionWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    benefits: number
    subscriptions: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | SubscriptionPlanCountOutputTypeCountBenefitsArgs
    subscriptions?: boolean | SubscriptionPlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanBenefitWhereInput
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type EventDefinitionCountOutputType
   */

  export type EventDefinitionCountOutputType = {
    trackedEvents: number
  }

  export type EventDefinitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackedEvents?: boolean | EventDefinitionCountOutputTypeCountTrackedEventsArgs
  }

  // Custom InputTypes
  /**
   * EventDefinitionCountOutputType without action
   */
  export type EventDefinitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinitionCountOutputType
     */
    select?: EventDefinitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventDefinitionCountOutputType without action
   */
  export type EventDefinitionCountOutputTypeCountTrackedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedEventWhereInput
  }


  /**
   * Count Type TrackedSessionCountOutputType
   */

  export type TrackedSessionCountOutputType = {
    pageViewEvents: number
  }

  export type TrackedSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageViewEvents?: boolean | TrackedSessionCountOutputTypeCountPageViewEventsArgs
  }

  // Custom InputTypes
  /**
   * TrackedSessionCountOutputType without action
   */
  export type TrackedSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSessionCountOutputType
     */
    select?: TrackedSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackedSessionCountOutputType without action
   */
  export type TrackedSessionCountOutputTypeCountPageViewEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    teamMemberships?: boolean | User$teamMembershipsArgs<ExtArgs>
    sites?: boolean | User$sitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    teamMemberships?: boolean | User$teamMembershipsArgs<ExtArgs>
    sites?: boolean | User$sitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      teamMemberships: Prisma.$TeamMemberPayload<ExtArgs>[]
      sites: Prisma.$SitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamMemberships<T extends User$teamMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sites<T extends User$sitesArgs<ExtArgs> = {}>(args?: Subset<T, User$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.teamMemberships
   */
  export type User$teamMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.sites
   */
  export type User$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    plan: string | null
    polarSubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    plan: string | null
    polarSubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    plan: number
    polarSubscriptionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    plan?: true
    polarSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    plan?: true
    polarSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    plan?: true
    polarSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    plan: string
    polarSubscriptionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    plan?: boolean
    polarSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    sites?: boolean | Team$sitesArgs<ExtArgs>
    subscriptions?: boolean | Team$subscriptionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    plan?: boolean
    polarSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    plan?: boolean
    polarSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    plan?: boolean
    polarSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "plan" | "polarSubscriptionId" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    sites?: boolean | Team$sitesArgs<ExtArgs>
    subscriptions?: boolean | Team$subscriptionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      sites: Prisma.$SitePayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      plan: string
      polarSubscriptionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sites<T extends Team$sitesArgs<ExtArgs> = {}>(args?: Subset<T, Team$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Team$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Team$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly slug: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly plan: FieldRef<"Team", 'String'>
    readonly polarSubscriptionId: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Team.sites
   */
  export type Team$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Team.subscriptions
   */
  export type Team$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    role: string | null
    joinedAt: Date | null
    userId: string | null
    teamId: string | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    role: string | null
    joinedAt: Date | null
    userId: string | null
    teamId: string | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    role: number
    joinedAt: number
    userId: number
    teamId: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    teamId?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    teamId?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    teamId?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    role: string
    joinedAt: Date
    userId: string
    teamId: string
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "joinedAt" | "userId" | "teamId", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      joinedAt: Date
      userId: string
      teamId: string
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'String'>
    readonly joinedAt: FieldRef<"TeamMember", 'DateTime'>
    readonly userId: FieldRef<"TeamMember", 'String'>
    readonly teamId: FieldRef<"TeamMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    teamId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    teamId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    createdAt: number
    updatedAt: number
    userId: number
    teamId: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    teamId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    teamId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    teamId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    domain: string | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    teamId: string | null
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | Site$userArgs<ExtArgs>
    team?: boolean | Site$teamArgs<ExtArgs>
    pageViewEvents?: boolean | Site$pageViewEventsArgs<ExtArgs>
    eventDefinitions?: boolean | Site$eventDefinitionsArgs<ExtArgs>
    trackedEvents?: boolean | Site$trackedEventsArgs<ExtArgs>
    trackedSessions?: boolean | Site$trackedSessionsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | Site$userArgs<ExtArgs>
    team?: boolean | Site$teamArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | Site$userArgs<ExtArgs>
    team?: boolean | Site$teamArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "createdAt" | "updatedAt" | "userId" | "teamId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Site$userArgs<ExtArgs>
    team?: boolean | Site$teamArgs<ExtArgs>
    pageViewEvents?: boolean | Site$pageViewEventsArgs<ExtArgs>
    eventDefinitions?: boolean | Site$eventDefinitionsArgs<ExtArgs>
    trackedEvents?: boolean | Site$trackedEventsArgs<ExtArgs>
    trackedSessions?: boolean | Site$trackedSessionsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Site$userArgs<ExtArgs>
    team?: boolean | Site$teamArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Site$userArgs<ExtArgs>
    team?: boolean | Site$teamArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      team: Prisma.$TeamPayload<ExtArgs> | null
      pageViewEvents: Prisma.$PageViewEventPayload<ExtArgs>[]
      eventDefinitions: Prisma.$EventDefinitionPayload<ExtArgs>[]
      trackedEvents: Prisma.$TrackedEventPayload<ExtArgs>[]
      trackedSessions: Prisma.$TrackedSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
      teamId: string | null
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Site$userArgs<ExtArgs> = {}>(args?: Subset<T, Site$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    team<T extends Site$teamArgs<ExtArgs> = {}>(args?: Subset<T, Site$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pageViewEvents<T extends Site$pageViewEventsArgs<ExtArgs> = {}>(args?: Subset<T, Site$pageViewEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventDefinitions<T extends Site$eventDefinitionsArgs<ExtArgs> = {}>(args?: Subset<T, Site$eventDefinitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackedEvents<T extends Site$trackedEventsArgs<ExtArgs> = {}>(args?: Subset<T, Site$trackedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackedSessions<T extends Site$trackedSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Site$trackedSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly domain: FieldRef<"Site", 'String'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
    readonly userId: FieldRef<"Site", 'String'>
    readonly teamId: FieldRef<"Site", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.user
   */
  export type Site$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Site.team
   */
  export type Site$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Site.pageViewEvents
   */
  export type Site$pageViewEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    where?: PageViewEventWhereInput
    orderBy?: PageViewEventOrderByWithRelationInput | PageViewEventOrderByWithRelationInput[]
    cursor?: PageViewEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageViewEventScalarFieldEnum | PageViewEventScalarFieldEnum[]
  }

  /**
   * Site.eventDefinitions
   */
  export type Site$eventDefinitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    where?: EventDefinitionWhereInput
    orderBy?: EventDefinitionOrderByWithRelationInput | EventDefinitionOrderByWithRelationInput[]
    cursor?: EventDefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventDefinitionScalarFieldEnum | EventDefinitionScalarFieldEnum[]
  }

  /**
   * Site.trackedEvents
   */
  export type Site$trackedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    where?: TrackedEventWhereInput
    orderBy?: TrackedEventOrderByWithRelationInput | TrackedEventOrderByWithRelationInput[]
    cursor?: TrackedEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackedEventScalarFieldEnum | TrackedEventScalarFieldEnum[]
  }

  /**
   * Site.trackedSessions
   */
  export type Site$trackedSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    where?: TrackedSessionWhereInput
    orderBy?: TrackedSessionOrderByWithRelationInput | TrackedSessionOrderByWithRelationInput[]
    cursor?: TrackedSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackedSessionScalarFieldEnum | TrackedSessionScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    priceAmount: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    priceAmount: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    polarProductId: string | null
    name: string | null
    description: string | null
    type: string | null
    priceAmount: number | null
    currency: string | null
    interval: string | null
    isActive: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    polarProductId: string | null
    name: string | null
    description: string | null
    type: string | null
    priceAmount: number | null
    currency: string | null
    interval: string | null
    isActive: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    polarProductId: number
    name: number
    description: number
    type: number
    priceAmount: number
    currency: number
    interval: number
    isActive: number
    isArchived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    priceAmount?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    priceAmount?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    polarProductId?: true
    name?: true
    description?: true
    type?: true
    priceAmount?: true
    currency?: true
    interval?: true
    isActive?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    polarProductId?: true
    name?: true
    description?: true
    type?: true
    priceAmount?: true
    currency?: true
    interval?: true
    isActive?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    polarProductId?: true
    name?: true
    description?: true
    type?: true
    priceAmount?: true
    currency?: true
    interval?: true
    isActive?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    polarProductId: string
    name: string
    description: string | null
    type: string
    priceAmount: number
    currency: string
    interval: string | null
    isActive: boolean
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    polarProductId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    priceAmount?: boolean
    currency?: boolean
    interval?: boolean
    isActive?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    benefits?: boolean | SubscriptionPlan$benefitsArgs<ExtArgs>
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    polarProductId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    priceAmount?: boolean
    currency?: boolean
    interval?: boolean
    isActive?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    polarProductId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    priceAmount?: boolean
    currency?: boolean
    interval?: boolean
    isActive?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    polarProductId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    priceAmount?: boolean
    currency?: boolean
    interval?: boolean
    isActive?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "polarProductId" | "name" | "description" | "type" | "priceAmount" | "currency" | "interval" | "isActive" | "isArchived" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | SubscriptionPlan$benefitsArgs<ExtArgs>
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      benefits: Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      polarProductId: string
      name: string
      description: string | null
      type: string
      priceAmount: number
      currency: string
      interval: string | null
      isActive: boolean
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    benefits<T extends SubscriptionPlan$benefitsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$benefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends SubscriptionPlan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly polarProductId: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly description: FieldRef<"SubscriptionPlan", 'String'>
    readonly type: FieldRef<"SubscriptionPlan", 'String'>
    readonly priceAmount: FieldRef<"SubscriptionPlan", 'Int'>
    readonly currency: FieldRef<"SubscriptionPlan", 'String'>
    readonly interval: FieldRef<"SubscriptionPlan", 'String'>
    readonly isActive: FieldRef<"SubscriptionPlan", 'Boolean'>
    readonly isArchived: FieldRef<"SubscriptionPlan", 'Boolean'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.benefits
   */
  export type SubscriptionPlan$benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    where?: SubscriptionPlanBenefitWhereInput
    orderBy?: SubscriptionPlanBenefitOrderByWithRelationInput | SubscriptionPlanBenefitOrderByWithRelationInput[]
    cursor?: SubscriptionPlanBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionPlanBenefitScalarFieldEnum | SubscriptionPlanBenefitScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan.subscriptions
   */
  export type SubscriptionPlan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlanBenefit
   */

  export type AggregateSubscriptionPlanBenefit = {
    _count: SubscriptionPlanBenefitCountAggregateOutputType | null
    _min: SubscriptionPlanBenefitMinAggregateOutputType | null
    _max: SubscriptionPlanBenefitMaxAggregateOutputType | null
  }

  export type SubscriptionPlanBenefitMinAggregateOutputType = {
    id: string | null
    planId: string | null
    name: string | null
    description: string | null
    type: string | null
    value: string | null
    createdAt: Date | null
  }

  export type SubscriptionPlanBenefitMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    name: string | null
    description: string | null
    type: string | null
    value: string | null
    createdAt: Date | null
  }

  export type SubscriptionPlanBenefitCountAggregateOutputType = {
    id: number
    planId: number
    name: number
    description: number
    type: number
    value: number
    createdAt: number
    _all: number
  }


  export type SubscriptionPlanBenefitMinAggregateInputType = {
    id?: true
    planId?: true
    name?: true
    description?: true
    type?: true
    value?: true
    createdAt?: true
  }

  export type SubscriptionPlanBenefitMaxAggregateInputType = {
    id?: true
    planId?: true
    name?: true
    description?: true
    type?: true
    value?: true
    createdAt?: true
  }

  export type SubscriptionPlanBenefitCountAggregateInputType = {
    id?: true
    planId?: true
    name?: true
    description?: true
    type?: true
    value?: true
    createdAt?: true
    _all?: true
  }

  export type SubscriptionPlanBenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlanBenefit to aggregate.
     */
    where?: SubscriptionPlanBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlanBenefits to fetch.
     */
    orderBy?: SubscriptionPlanBenefitOrderByWithRelationInput | SubscriptionPlanBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlanBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlanBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlanBenefits
    **/
    _count?: true | SubscriptionPlanBenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanBenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanBenefitMaxAggregateInputType
  }

  export type GetSubscriptionPlanBenefitAggregateType<T extends SubscriptionPlanBenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlanBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlanBenefit[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlanBenefit[P]>
  }




  export type SubscriptionPlanBenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanBenefitWhereInput
    orderBy?: SubscriptionPlanBenefitOrderByWithAggregationInput | SubscriptionPlanBenefitOrderByWithAggregationInput[]
    by: SubscriptionPlanBenefitScalarFieldEnum[] | SubscriptionPlanBenefitScalarFieldEnum
    having?: SubscriptionPlanBenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanBenefitCountAggregateInputType | true
    _min?: SubscriptionPlanBenefitMinAggregateInputType
    _max?: SubscriptionPlanBenefitMaxAggregateInputType
  }

  export type SubscriptionPlanBenefitGroupByOutputType = {
    id: string
    planId: string
    name: string
    description: string | null
    type: string | null
    value: string | null
    createdAt: Date
    _count: SubscriptionPlanBenefitCountAggregateOutputType | null
    _min: SubscriptionPlanBenefitMinAggregateOutputType | null
    _max: SubscriptionPlanBenefitMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanBenefitGroupByPayload<T extends SubscriptionPlanBenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanBenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanBenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanBenefitGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanBenefitGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlanBenefit"]>

  export type SubscriptionPlanBenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlanBenefit"]>

  export type SubscriptionPlanBenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlanBenefit"]>

  export type SubscriptionPlanBenefitSelectScalar = {
    id?: boolean
    planId?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
  }

  export type SubscriptionPlanBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "name" | "description" | "type" | "value" | "createdAt", ExtArgs["result"]["subscriptionPlanBenefit"]>
  export type SubscriptionPlanBenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanBenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanBenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPlanBenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlanBenefit"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      name: string
      description: string | null
      type: string | null
      value: string | null
      createdAt: Date
    }, ExtArgs["result"]["subscriptionPlanBenefit"]>
    composites: {}
  }

  type SubscriptionPlanBenefitGetPayload<S extends boolean | null | undefined | SubscriptionPlanBenefitDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload, S>

  type SubscriptionPlanBenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanBenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanBenefitCountAggregateInputType | true
    }

  export interface SubscriptionPlanBenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlanBenefit'], meta: { name: 'SubscriptionPlanBenefit' } }
    /**
     * Find zero or one SubscriptionPlanBenefit that matches the filter.
     * @param {SubscriptionPlanBenefitFindUniqueArgs} args - Arguments to find a SubscriptionPlanBenefit
     * @example
     * // Get one SubscriptionPlanBenefit
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanBenefitFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanBenefitFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlanBenefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanBenefitFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlanBenefit
     * @example
     * // Get one SubscriptionPlanBenefit
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanBenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanBenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlanBenefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanBenefitFindFirstArgs} args - Arguments to find a SubscriptionPlanBenefit
     * @example
     * // Get one SubscriptionPlanBenefit
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanBenefitFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanBenefitFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlanBenefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanBenefitFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlanBenefit
     * @example
     * // Get one SubscriptionPlanBenefit
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanBenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanBenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlanBenefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanBenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlanBenefits
     * const subscriptionPlanBenefits = await prisma.subscriptionPlanBenefit.findMany()
     * 
     * // Get first 10 SubscriptionPlanBenefits
     * const subscriptionPlanBenefits = await prisma.subscriptionPlanBenefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanBenefitWithIdOnly = await prisma.subscriptionPlanBenefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanBenefitFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanBenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlanBenefit.
     * @param {SubscriptionPlanBenefitCreateArgs} args - Arguments to create a SubscriptionPlanBenefit.
     * @example
     * // Create one SubscriptionPlanBenefit
     * const SubscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.create({
     *   data: {
     *     // ... data to create a SubscriptionPlanBenefit
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanBenefitCreateArgs>(args: SelectSubset<T, SubscriptionPlanBenefitCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlanBenefits.
     * @param {SubscriptionPlanBenefitCreateManyArgs} args - Arguments to create many SubscriptionPlanBenefits.
     * @example
     * // Create many SubscriptionPlanBenefits
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanBenefitCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanBenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlanBenefits and returns the data saved in the database.
     * @param {SubscriptionPlanBenefitCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlanBenefits.
     * @example
     * // Create many SubscriptionPlanBenefits
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlanBenefits and only return the `id`
     * const subscriptionPlanBenefitWithIdOnly = await prisma.subscriptionPlanBenefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanBenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanBenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPlanBenefit.
     * @param {SubscriptionPlanBenefitDeleteArgs} args - Arguments to delete one SubscriptionPlanBenefit.
     * @example
     * // Delete one SubscriptionPlanBenefit
     * const SubscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlanBenefit
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanBenefitDeleteArgs>(args: SelectSubset<T, SubscriptionPlanBenefitDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlanBenefit.
     * @param {SubscriptionPlanBenefitUpdateArgs} args - Arguments to update one SubscriptionPlanBenefit.
     * @example
     * // Update one SubscriptionPlanBenefit
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanBenefitUpdateArgs>(args: SelectSubset<T, SubscriptionPlanBenefitUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlanBenefits.
     * @param {SubscriptionPlanBenefitDeleteManyArgs} args - Arguments to filter SubscriptionPlanBenefits to delete.
     * @example
     * // Delete a few SubscriptionPlanBenefits
     * const { count } = await prisma.subscriptionPlanBenefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanBenefitDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanBenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlanBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanBenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlanBenefits
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanBenefitUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanBenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlanBenefits and returns the data updated in the database.
     * @param {SubscriptionPlanBenefitUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlanBenefits.
     * @example
     * // Update many SubscriptionPlanBenefits
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPlanBenefits and only return the `id`
     * const subscriptionPlanBenefitWithIdOnly = await prisma.subscriptionPlanBenefit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionPlanBenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPlanBenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPlanBenefit.
     * @param {SubscriptionPlanBenefitUpsertArgs} args - Arguments to update or create a SubscriptionPlanBenefit.
     * @example
     * // Update or create a SubscriptionPlanBenefit
     * const subscriptionPlanBenefit = await prisma.subscriptionPlanBenefit.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlanBenefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlanBenefit we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanBenefitUpsertArgs>(args: SelectSubset<T, SubscriptionPlanBenefitUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanBenefitClient<$Result.GetResult<Prisma.$SubscriptionPlanBenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlanBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanBenefitCountArgs} args - Arguments to filter SubscriptionPlanBenefits to count.
     * @example
     * // Count the number of SubscriptionPlanBenefits
     * const count = await prisma.subscriptionPlanBenefit.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlanBenefits we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanBenefitCountArgs>(
      args?: Subset<T, SubscriptionPlanBenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanBenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlanBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanBenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionPlanBenefitAggregateArgs>(args: Subset<T, SubscriptionPlanBenefitAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanBenefitAggregateType<T>>

    /**
     * Group by SubscriptionPlanBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanBenefitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionPlanBenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanBenefitGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanBenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionPlanBenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlanBenefit model
   */
  readonly fields: SubscriptionPlanBenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlanBenefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanBenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionPlanBenefit model
   */
  interface SubscriptionPlanBenefitFieldRefs {
    readonly id: FieldRef<"SubscriptionPlanBenefit", 'String'>
    readonly planId: FieldRef<"SubscriptionPlanBenefit", 'String'>
    readonly name: FieldRef<"SubscriptionPlanBenefit", 'String'>
    readonly description: FieldRef<"SubscriptionPlanBenefit", 'String'>
    readonly type: FieldRef<"SubscriptionPlanBenefit", 'String'>
    readonly value: FieldRef<"SubscriptionPlanBenefit", 'String'>
    readonly createdAt: FieldRef<"SubscriptionPlanBenefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlanBenefit findUnique
   */
  export type SubscriptionPlanBenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlanBenefit to fetch.
     */
    where: SubscriptionPlanBenefitWhereUniqueInput
  }

  /**
   * SubscriptionPlanBenefit findUniqueOrThrow
   */
  export type SubscriptionPlanBenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlanBenefit to fetch.
     */
    where: SubscriptionPlanBenefitWhereUniqueInput
  }

  /**
   * SubscriptionPlanBenefit findFirst
   */
  export type SubscriptionPlanBenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlanBenefit to fetch.
     */
    where?: SubscriptionPlanBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlanBenefits to fetch.
     */
    orderBy?: SubscriptionPlanBenefitOrderByWithRelationInput | SubscriptionPlanBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlanBenefits.
     */
    cursor?: SubscriptionPlanBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlanBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlanBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlanBenefits.
     */
    distinct?: SubscriptionPlanBenefitScalarFieldEnum | SubscriptionPlanBenefitScalarFieldEnum[]
  }

  /**
   * SubscriptionPlanBenefit findFirstOrThrow
   */
  export type SubscriptionPlanBenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlanBenefit to fetch.
     */
    where?: SubscriptionPlanBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlanBenefits to fetch.
     */
    orderBy?: SubscriptionPlanBenefitOrderByWithRelationInput | SubscriptionPlanBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlanBenefits.
     */
    cursor?: SubscriptionPlanBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlanBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlanBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlanBenefits.
     */
    distinct?: SubscriptionPlanBenefitScalarFieldEnum | SubscriptionPlanBenefitScalarFieldEnum[]
  }

  /**
   * SubscriptionPlanBenefit findMany
   */
  export type SubscriptionPlanBenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlanBenefits to fetch.
     */
    where?: SubscriptionPlanBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlanBenefits to fetch.
     */
    orderBy?: SubscriptionPlanBenefitOrderByWithRelationInput | SubscriptionPlanBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlanBenefits.
     */
    cursor?: SubscriptionPlanBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlanBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlanBenefits.
     */
    skip?: number
    distinct?: SubscriptionPlanBenefitScalarFieldEnum | SubscriptionPlanBenefitScalarFieldEnum[]
  }

  /**
   * SubscriptionPlanBenefit create
   */
  export type SubscriptionPlanBenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlanBenefit.
     */
    data: XOR<SubscriptionPlanBenefitCreateInput, SubscriptionPlanBenefitUncheckedCreateInput>
  }

  /**
   * SubscriptionPlanBenefit createMany
   */
  export type SubscriptionPlanBenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlanBenefits.
     */
    data: SubscriptionPlanBenefitCreateManyInput | SubscriptionPlanBenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlanBenefit createManyAndReturn
   */
  export type SubscriptionPlanBenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlanBenefits.
     */
    data: SubscriptionPlanBenefitCreateManyInput | SubscriptionPlanBenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionPlanBenefit update
   */
  export type SubscriptionPlanBenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlanBenefit.
     */
    data: XOR<SubscriptionPlanBenefitUpdateInput, SubscriptionPlanBenefitUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlanBenefit to update.
     */
    where: SubscriptionPlanBenefitWhereUniqueInput
  }

  /**
   * SubscriptionPlanBenefit updateMany
   */
  export type SubscriptionPlanBenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlanBenefits.
     */
    data: XOR<SubscriptionPlanBenefitUpdateManyMutationInput, SubscriptionPlanBenefitUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlanBenefits to update
     */
    where?: SubscriptionPlanBenefitWhereInput
    /**
     * Limit how many SubscriptionPlanBenefits to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlanBenefit updateManyAndReturn
   */
  export type SubscriptionPlanBenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlanBenefits.
     */
    data: XOR<SubscriptionPlanBenefitUpdateManyMutationInput, SubscriptionPlanBenefitUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlanBenefits to update
     */
    where?: SubscriptionPlanBenefitWhereInput
    /**
     * Limit how many SubscriptionPlanBenefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionPlanBenefit upsert
   */
  export type SubscriptionPlanBenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlanBenefit to update in case it exists.
     */
    where: SubscriptionPlanBenefitWhereUniqueInput
    /**
     * In case the SubscriptionPlanBenefit found by the `where` argument doesn't exist, create a new SubscriptionPlanBenefit with this data.
     */
    create: XOR<SubscriptionPlanBenefitCreateInput, SubscriptionPlanBenefitUncheckedCreateInput>
    /**
     * In case the SubscriptionPlanBenefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanBenefitUpdateInput, SubscriptionPlanBenefitUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlanBenefit delete
   */
  export type SubscriptionPlanBenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlanBenefit to delete.
     */
    where: SubscriptionPlanBenefitWhereUniqueInput
  }

  /**
   * SubscriptionPlanBenefit deleteMany
   */
  export type SubscriptionPlanBenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlanBenefits to delete
     */
    where?: SubscriptionPlanBenefitWhereInput
    /**
     * Limit how many SubscriptionPlanBenefits to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlanBenefit without action
   */
  export type SubscriptionPlanBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanBenefit
     */
    select?: SubscriptionPlanBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlanBenefit
     */
    omit?: SubscriptionPlanBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanBenefitInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    polarSubscriptionId: string | null
    polarCustomerId: string | null
    status: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    planId: string | null
    teamId: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    polarSubscriptionId: string | null
    polarCustomerId: string | null
    status: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    planId: string | null
    teamId: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    polarSubscriptionId: number
    polarCustomerId: number
    status: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    canceledAt: number
    endedAt: number
    createdAt: number
    updatedAt: number
    planId: number
    teamId: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    polarSubscriptionId?: true
    polarCustomerId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    planId?: true
    teamId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    polarSubscriptionId?: true
    polarCustomerId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    planId?: true
    teamId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    polarSubscriptionId?: true
    polarCustomerId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    planId?: true
    teamId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    polarSubscriptionId: string
    polarCustomerId: string | null
    status: string
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean
    canceledAt: Date | null
    endedAt: Date | null
    createdAt: Date
    updatedAt: Date
    planId: string
    teamId: string
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    polarSubscriptionId?: boolean
    polarCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planId?: boolean
    teamId?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    polarSubscriptionId?: boolean
    polarCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planId?: boolean
    teamId?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    polarSubscriptionId?: boolean
    polarCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planId?: boolean
    teamId?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    polarSubscriptionId?: boolean
    polarCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planId?: boolean
    teamId?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "polarSubscriptionId" | "polarCustomerId" | "status" | "currentPeriodStart" | "currentPeriodEnd" | "cancelAtPeriodEnd" | "canceledAt" | "endedAt" | "createdAt" | "updatedAt" | "planId" | "teamId", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      polarSubscriptionId: string
      polarCustomerId: string | null
      status: string
      currentPeriodStart: Date | null
      currentPeriodEnd: Date | null
      cancelAtPeriodEnd: boolean
      canceledAt: Date | null
      endedAt: Date | null
      createdAt: Date
      updatedAt: Date
      planId: string
      teamId: string
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly polarSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly polarCustomerId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly canceledAt: FieldRef<"Subscription", 'DateTime'>
    readonly endedAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly teamId: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model PageViewEvent
   */

  export type AggregatePageViewEvent = {
    _count: PageViewEventCountAggregateOutputType | null
    _avg: PageViewEventAvgAggregateOutputType | null
    _sum: PageViewEventSumAggregateOutputType | null
    _min: PageViewEventMinAggregateOutputType | null
    _max: PageViewEventMaxAggregateOutputType | null
  }

  export type PageViewEventAvgAggregateOutputType = {
    lat: number | null
    lon: number | null
  }

  export type PageViewEventSumAggregateOutputType = {
    lat: number | null
    lon: number | null
  }

  export type PageViewEventMinAggregateOutputType = {
    id: string | null
    url: string | null
    timestamp: Date | null
    createdAt: Date | null
    ip: string | null
    country: string | null
    countryCode: string | null
    region: string | null
    regionName: string | null
    city: string | null
    zip: string | null
    lat: number | null
    lon: number | null
    timezone: string | null
    isp: string | null
    mobile: boolean | null
    userAgent: string | null
    siteId: string | null
    sessionId: string | null
  }

  export type PageViewEventMaxAggregateOutputType = {
    id: string | null
    url: string | null
    timestamp: Date | null
    createdAt: Date | null
    ip: string | null
    country: string | null
    countryCode: string | null
    region: string | null
    regionName: string | null
    city: string | null
    zip: string | null
    lat: number | null
    lon: number | null
    timezone: string | null
    isp: string | null
    mobile: boolean | null
    userAgent: string | null
    siteId: string | null
    sessionId: string | null
  }

  export type PageViewEventCountAggregateOutputType = {
    id: number
    url: number
    timestamp: number
    createdAt: number
    ip: number
    country: number
    countryCode: number
    region: number
    regionName: number
    city: number
    zip: number
    lat: number
    lon: number
    timezone: number
    isp: number
    mobile: number
    userAgent: number
    siteId: number
    sessionId: number
    _all: number
  }


  export type PageViewEventAvgAggregateInputType = {
    lat?: true
    lon?: true
  }

  export type PageViewEventSumAggregateInputType = {
    lat?: true
    lon?: true
  }

  export type PageViewEventMinAggregateInputType = {
    id?: true
    url?: true
    timestamp?: true
    createdAt?: true
    ip?: true
    country?: true
    countryCode?: true
    region?: true
    regionName?: true
    city?: true
    zip?: true
    lat?: true
    lon?: true
    timezone?: true
    isp?: true
    mobile?: true
    userAgent?: true
    siteId?: true
    sessionId?: true
  }

  export type PageViewEventMaxAggregateInputType = {
    id?: true
    url?: true
    timestamp?: true
    createdAt?: true
    ip?: true
    country?: true
    countryCode?: true
    region?: true
    regionName?: true
    city?: true
    zip?: true
    lat?: true
    lon?: true
    timezone?: true
    isp?: true
    mobile?: true
    userAgent?: true
    siteId?: true
    sessionId?: true
  }

  export type PageViewEventCountAggregateInputType = {
    id?: true
    url?: true
    timestamp?: true
    createdAt?: true
    ip?: true
    country?: true
    countryCode?: true
    region?: true
    regionName?: true
    city?: true
    zip?: true
    lat?: true
    lon?: true
    timezone?: true
    isp?: true
    mobile?: true
    userAgent?: true
    siteId?: true
    sessionId?: true
    _all?: true
  }

  export type PageViewEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageViewEvent to aggregate.
     */
    where?: PageViewEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViewEvents to fetch.
     */
    orderBy?: PageViewEventOrderByWithRelationInput | PageViewEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageViewEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViewEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViewEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageViewEvents
    **/
    _count?: true | PageViewEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageViewEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageViewEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageViewEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageViewEventMaxAggregateInputType
  }

  export type GetPageViewEventAggregateType<T extends PageViewEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePageViewEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageViewEvent[P]>
      : GetScalarType<T[P], AggregatePageViewEvent[P]>
  }




  export type PageViewEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewEventWhereInput
    orderBy?: PageViewEventOrderByWithAggregationInput | PageViewEventOrderByWithAggregationInput[]
    by: PageViewEventScalarFieldEnum[] | PageViewEventScalarFieldEnum
    having?: PageViewEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageViewEventCountAggregateInputType | true
    _avg?: PageViewEventAvgAggregateInputType
    _sum?: PageViewEventSumAggregateInputType
    _min?: PageViewEventMinAggregateInputType
    _max?: PageViewEventMaxAggregateInputType
  }

  export type PageViewEventGroupByOutputType = {
    id: string
    url: string
    timestamp: Date
    createdAt: Date
    ip: string | null
    country: string | null
    countryCode: string | null
    region: string | null
    regionName: string | null
    city: string | null
    zip: string | null
    lat: number | null
    lon: number | null
    timezone: string | null
    isp: string | null
    mobile: boolean | null
    userAgent: string | null
    siteId: string
    sessionId: string | null
    _count: PageViewEventCountAggregateOutputType | null
    _avg: PageViewEventAvgAggregateOutputType | null
    _sum: PageViewEventSumAggregateOutputType | null
    _min: PageViewEventMinAggregateOutputType | null
    _max: PageViewEventMaxAggregateOutputType | null
  }

  type GetPageViewEventGroupByPayload<T extends PageViewEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageViewEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageViewEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageViewEventGroupByOutputType[P]>
            : GetScalarType<T[P], PageViewEventGroupByOutputType[P]>
        }
      >
    >


  export type PageViewEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
    ip?: boolean
    country?: boolean
    countryCode?: boolean
    region?: boolean
    regionName?: boolean
    city?: boolean
    zip?: boolean
    lat?: boolean
    lon?: boolean
    timezone?: boolean
    isp?: boolean
    mobile?: boolean
    userAgent?: boolean
    siteId?: boolean
    sessionId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    session?: boolean | PageViewEvent$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["pageViewEvent"]>

  export type PageViewEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
    ip?: boolean
    country?: boolean
    countryCode?: boolean
    region?: boolean
    regionName?: boolean
    city?: boolean
    zip?: boolean
    lat?: boolean
    lon?: boolean
    timezone?: boolean
    isp?: boolean
    mobile?: boolean
    userAgent?: boolean
    siteId?: boolean
    sessionId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    session?: boolean | PageViewEvent$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["pageViewEvent"]>

  export type PageViewEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
    ip?: boolean
    country?: boolean
    countryCode?: boolean
    region?: boolean
    regionName?: boolean
    city?: boolean
    zip?: boolean
    lat?: boolean
    lon?: boolean
    timezone?: boolean
    isp?: boolean
    mobile?: boolean
    userAgent?: boolean
    siteId?: boolean
    sessionId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    session?: boolean | PageViewEvent$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["pageViewEvent"]>

  export type PageViewEventSelectScalar = {
    id?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
    ip?: boolean
    country?: boolean
    countryCode?: boolean
    region?: boolean
    regionName?: boolean
    city?: boolean
    zip?: boolean
    lat?: boolean
    lon?: boolean
    timezone?: boolean
    isp?: boolean
    mobile?: boolean
    userAgent?: boolean
    siteId?: boolean
    sessionId?: boolean
  }

  export type PageViewEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "timestamp" | "createdAt" | "ip" | "country" | "countryCode" | "region" | "regionName" | "city" | "zip" | "lat" | "lon" | "timezone" | "isp" | "mobile" | "userAgent" | "siteId" | "sessionId", ExtArgs["result"]["pageViewEvent"]>
  export type PageViewEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    session?: boolean | PageViewEvent$sessionArgs<ExtArgs>
  }
  export type PageViewEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    session?: boolean | PageViewEvent$sessionArgs<ExtArgs>
  }
  export type PageViewEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    session?: boolean | PageViewEvent$sessionArgs<ExtArgs>
  }

  export type $PageViewEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageViewEvent"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      session: Prisma.$TrackedSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      timestamp: Date
      createdAt: Date
      ip: string | null
      country: string | null
      countryCode: string | null
      region: string | null
      regionName: string | null
      city: string | null
      zip: string | null
      lat: number | null
      lon: number | null
      timezone: string | null
      isp: string | null
      mobile: boolean | null
      userAgent: string | null
      siteId: string
      sessionId: string | null
    }, ExtArgs["result"]["pageViewEvent"]>
    composites: {}
  }

  type PageViewEventGetPayload<S extends boolean | null | undefined | PageViewEventDefaultArgs> = $Result.GetResult<Prisma.$PageViewEventPayload, S>

  type PageViewEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageViewEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageViewEventCountAggregateInputType | true
    }

  export interface PageViewEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageViewEvent'], meta: { name: 'PageViewEvent' } }
    /**
     * Find zero or one PageViewEvent that matches the filter.
     * @param {PageViewEventFindUniqueArgs} args - Arguments to find a PageViewEvent
     * @example
     * // Get one PageViewEvent
     * const pageViewEvent = await prisma.pageViewEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageViewEventFindUniqueArgs>(args: SelectSubset<T, PageViewEventFindUniqueArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageViewEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageViewEventFindUniqueOrThrowArgs} args - Arguments to find a PageViewEvent
     * @example
     * // Get one PageViewEvent
     * const pageViewEvent = await prisma.pageViewEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageViewEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PageViewEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageViewEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewEventFindFirstArgs} args - Arguments to find a PageViewEvent
     * @example
     * // Get one PageViewEvent
     * const pageViewEvent = await prisma.pageViewEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageViewEventFindFirstArgs>(args?: SelectSubset<T, PageViewEventFindFirstArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageViewEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewEventFindFirstOrThrowArgs} args - Arguments to find a PageViewEvent
     * @example
     * // Get one PageViewEvent
     * const pageViewEvent = await prisma.pageViewEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageViewEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PageViewEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageViewEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageViewEvents
     * const pageViewEvents = await prisma.pageViewEvent.findMany()
     * 
     * // Get first 10 PageViewEvents
     * const pageViewEvents = await prisma.pageViewEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageViewEventWithIdOnly = await prisma.pageViewEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageViewEventFindManyArgs>(args?: SelectSubset<T, PageViewEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageViewEvent.
     * @param {PageViewEventCreateArgs} args - Arguments to create a PageViewEvent.
     * @example
     * // Create one PageViewEvent
     * const PageViewEvent = await prisma.pageViewEvent.create({
     *   data: {
     *     // ... data to create a PageViewEvent
     *   }
     * })
     * 
     */
    create<T extends PageViewEventCreateArgs>(args: SelectSubset<T, PageViewEventCreateArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageViewEvents.
     * @param {PageViewEventCreateManyArgs} args - Arguments to create many PageViewEvents.
     * @example
     * // Create many PageViewEvents
     * const pageViewEvent = await prisma.pageViewEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageViewEventCreateManyArgs>(args?: SelectSubset<T, PageViewEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageViewEvents and returns the data saved in the database.
     * @param {PageViewEventCreateManyAndReturnArgs} args - Arguments to create many PageViewEvents.
     * @example
     * // Create many PageViewEvents
     * const pageViewEvent = await prisma.pageViewEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageViewEvents and only return the `id`
     * const pageViewEventWithIdOnly = await prisma.pageViewEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageViewEventCreateManyAndReturnArgs>(args?: SelectSubset<T, PageViewEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageViewEvent.
     * @param {PageViewEventDeleteArgs} args - Arguments to delete one PageViewEvent.
     * @example
     * // Delete one PageViewEvent
     * const PageViewEvent = await prisma.pageViewEvent.delete({
     *   where: {
     *     // ... filter to delete one PageViewEvent
     *   }
     * })
     * 
     */
    delete<T extends PageViewEventDeleteArgs>(args: SelectSubset<T, PageViewEventDeleteArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageViewEvent.
     * @param {PageViewEventUpdateArgs} args - Arguments to update one PageViewEvent.
     * @example
     * // Update one PageViewEvent
     * const pageViewEvent = await prisma.pageViewEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageViewEventUpdateArgs>(args: SelectSubset<T, PageViewEventUpdateArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageViewEvents.
     * @param {PageViewEventDeleteManyArgs} args - Arguments to filter PageViewEvents to delete.
     * @example
     * // Delete a few PageViewEvents
     * const { count } = await prisma.pageViewEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageViewEventDeleteManyArgs>(args?: SelectSubset<T, PageViewEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViewEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageViewEvents
     * const pageViewEvent = await prisma.pageViewEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageViewEventUpdateManyArgs>(args: SelectSubset<T, PageViewEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViewEvents and returns the data updated in the database.
     * @param {PageViewEventUpdateManyAndReturnArgs} args - Arguments to update many PageViewEvents.
     * @example
     * // Update many PageViewEvents
     * const pageViewEvent = await prisma.pageViewEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageViewEvents and only return the `id`
     * const pageViewEventWithIdOnly = await prisma.pageViewEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageViewEventUpdateManyAndReturnArgs>(args: SelectSubset<T, PageViewEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageViewEvent.
     * @param {PageViewEventUpsertArgs} args - Arguments to update or create a PageViewEvent.
     * @example
     * // Update or create a PageViewEvent
     * const pageViewEvent = await prisma.pageViewEvent.upsert({
     *   create: {
     *     // ... data to create a PageViewEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageViewEvent we want to update
     *   }
     * })
     */
    upsert<T extends PageViewEventUpsertArgs>(args: SelectSubset<T, PageViewEventUpsertArgs<ExtArgs>>): Prisma__PageViewEventClient<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageViewEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewEventCountArgs} args - Arguments to filter PageViewEvents to count.
     * @example
     * // Count the number of PageViewEvents
     * const count = await prisma.pageViewEvent.count({
     *   where: {
     *     // ... the filter for the PageViewEvents we want to count
     *   }
     * })
    **/
    count<T extends PageViewEventCountArgs>(
      args?: Subset<T, PageViewEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageViewEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageViewEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageViewEventAggregateArgs>(args: Subset<T, PageViewEventAggregateArgs>): Prisma.PrismaPromise<GetPageViewEventAggregateType<T>>

    /**
     * Group by PageViewEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageViewEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageViewEventGroupByArgs['orderBy'] }
        : { orderBy?: PageViewEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageViewEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageViewEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageViewEvent model
   */
  readonly fields: PageViewEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageViewEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageViewEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends PageViewEvent$sessionArgs<ExtArgs> = {}>(args?: Subset<T, PageViewEvent$sessionArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageViewEvent model
   */
  interface PageViewEventFieldRefs {
    readonly id: FieldRef<"PageViewEvent", 'String'>
    readonly url: FieldRef<"PageViewEvent", 'String'>
    readonly timestamp: FieldRef<"PageViewEvent", 'DateTime'>
    readonly createdAt: FieldRef<"PageViewEvent", 'DateTime'>
    readonly ip: FieldRef<"PageViewEvent", 'String'>
    readonly country: FieldRef<"PageViewEvent", 'String'>
    readonly countryCode: FieldRef<"PageViewEvent", 'String'>
    readonly region: FieldRef<"PageViewEvent", 'String'>
    readonly regionName: FieldRef<"PageViewEvent", 'String'>
    readonly city: FieldRef<"PageViewEvent", 'String'>
    readonly zip: FieldRef<"PageViewEvent", 'String'>
    readonly lat: FieldRef<"PageViewEvent", 'Float'>
    readonly lon: FieldRef<"PageViewEvent", 'Float'>
    readonly timezone: FieldRef<"PageViewEvent", 'String'>
    readonly isp: FieldRef<"PageViewEvent", 'String'>
    readonly mobile: FieldRef<"PageViewEvent", 'Boolean'>
    readonly userAgent: FieldRef<"PageViewEvent", 'String'>
    readonly siteId: FieldRef<"PageViewEvent", 'String'>
    readonly sessionId: FieldRef<"PageViewEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PageViewEvent findUnique
   */
  export type PageViewEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * Filter, which PageViewEvent to fetch.
     */
    where: PageViewEventWhereUniqueInput
  }

  /**
   * PageViewEvent findUniqueOrThrow
   */
  export type PageViewEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * Filter, which PageViewEvent to fetch.
     */
    where: PageViewEventWhereUniqueInput
  }

  /**
   * PageViewEvent findFirst
   */
  export type PageViewEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * Filter, which PageViewEvent to fetch.
     */
    where?: PageViewEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViewEvents to fetch.
     */
    orderBy?: PageViewEventOrderByWithRelationInput | PageViewEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViewEvents.
     */
    cursor?: PageViewEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViewEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViewEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViewEvents.
     */
    distinct?: PageViewEventScalarFieldEnum | PageViewEventScalarFieldEnum[]
  }

  /**
   * PageViewEvent findFirstOrThrow
   */
  export type PageViewEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * Filter, which PageViewEvent to fetch.
     */
    where?: PageViewEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViewEvents to fetch.
     */
    orderBy?: PageViewEventOrderByWithRelationInput | PageViewEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViewEvents.
     */
    cursor?: PageViewEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViewEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViewEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViewEvents.
     */
    distinct?: PageViewEventScalarFieldEnum | PageViewEventScalarFieldEnum[]
  }

  /**
   * PageViewEvent findMany
   */
  export type PageViewEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * Filter, which PageViewEvents to fetch.
     */
    where?: PageViewEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViewEvents to fetch.
     */
    orderBy?: PageViewEventOrderByWithRelationInput | PageViewEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageViewEvents.
     */
    cursor?: PageViewEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViewEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViewEvents.
     */
    skip?: number
    distinct?: PageViewEventScalarFieldEnum | PageViewEventScalarFieldEnum[]
  }

  /**
   * PageViewEvent create
   */
  export type PageViewEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PageViewEvent.
     */
    data: XOR<PageViewEventCreateInput, PageViewEventUncheckedCreateInput>
  }

  /**
   * PageViewEvent createMany
   */
  export type PageViewEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageViewEvents.
     */
    data: PageViewEventCreateManyInput | PageViewEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageViewEvent createManyAndReturn
   */
  export type PageViewEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * The data used to create many PageViewEvents.
     */
    data: PageViewEventCreateManyInput | PageViewEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageViewEvent update
   */
  export type PageViewEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PageViewEvent.
     */
    data: XOR<PageViewEventUpdateInput, PageViewEventUncheckedUpdateInput>
    /**
     * Choose, which PageViewEvent to update.
     */
    where: PageViewEventWhereUniqueInput
  }

  /**
   * PageViewEvent updateMany
   */
  export type PageViewEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageViewEvents.
     */
    data: XOR<PageViewEventUpdateManyMutationInput, PageViewEventUncheckedUpdateManyInput>
    /**
     * Filter which PageViewEvents to update
     */
    where?: PageViewEventWhereInput
    /**
     * Limit how many PageViewEvents to update.
     */
    limit?: number
  }

  /**
   * PageViewEvent updateManyAndReturn
   */
  export type PageViewEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * The data used to update PageViewEvents.
     */
    data: XOR<PageViewEventUpdateManyMutationInput, PageViewEventUncheckedUpdateManyInput>
    /**
     * Filter which PageViewEvents to update
     */
    where?: PageViewEventWhereInput
    /**
     * Limit how many PageViewEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageViewEvent upsert
   */
  export type PageViewEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PageViewEvent to update in case it exists.
     */
    where: PageViewEventWhereUniqueInput
    /**
     * In case the PageViewEvent found by the `where` argument doesn't exist, create a new PageViewEvent with this data.
     */
    create: XOR<PageViewEventCreateInput, PageViewEventUncheckedCreateInput>
    /**
     * In case the PageViewEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageViewEventUpdateInput, PageViewEventUncheckedUpdateInput>
  }

  /**
   * PageViewEvent delete
   */
  export type PageViewEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    /**
     * Filter which PageViewEvent to delete.
     */
    where: PageViewEventWhereUniqueInput
  }

  /**
   * PageViewEvent deleteMany
   */
  export type PageViewEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageViewEvents to delete
     */
    where?: PageViewEventWhereInput
    /**
     * Limit how many PageViewEvents to delete.
     */
    limit?: number
  }

  /**
   * PageViewEvent.session
   */
  export type PageViewEvent$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    where?: TrackedSessionWhereInput
  }

  /**
   * PageViewEvent without action
   */
  export type PageViewEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
  }


  /**
   * Model EventDefinition
   */

  export type AggregateEventDefinition = {
    _count: EventDefinitionCountAggregateOutputType | null
    _min: EventDefinitionMinAggregateOutputType | null
    _max: EventDefinitionMaxAggregateOutputType | null
  }

  export type EventDefinitionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    trackingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    siteId: string | null
  }

  export type EventDefinitionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    trackingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    siteId: string | null
  }

  export type EventDefinitionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    trackingId: number
    createdAt: number
    updatedAt: number
    siteId: number
    _all: number
  }


  export type EventDefinitionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trackingId?: true
    createdAt?: true
    updatedAt?: true
    siteId?: true
  }

  export type EventDefinitionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trackingId?: true
    createdAt?: true
    updatedAt?: true
    siteId?: true
  }

  export type EventDefinitionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trackingId?: true
    createdAt?: true
    updatedAt?: true
    siteId?: true
    _all?: true
  }

  export type EventDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventDefinition to aggregate.
     */
    where?: EventDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDefinitions to fetch.
     */
    orderBy?: EventDefinitionOrderByWithRelationInput | EventDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventDefinitions
    **/
    _count?: true | EventDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventDefinitionMaxAggregateInputType
  }

  export type GetEventDefinitionAggregateType<T extends EventDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventDefinition[P]>
      : GetScalarType<T[P], AggregateEventDefinition[P]>
  }




  export type EventDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventDefinitionWhereInput
    orderBy?: EventDefinitionOrderByWithAggregationInput | EventDefinitionOrderByWithAggregationInput[]
    by: EventDefinitionScalarFieldEnum[] | EventDefinitionScalarFieldEnum
    having?: EventDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventDefinitionCountAggregateInputType | true
    _min?: EventDefinitionMinAggregateInputType
    _max?: EventDefinitionMaxAggregateInputType
  }

  export type EventDefinitionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    trackingId: string
    createdAt: Date
    updatedAt: Date
    siteId: string
    _count: EventDefinitionCountAggregateOutputType | null
    _min: EventDefinitionMinAggregateOutputType | null
    _max: EventDefinitionMaxAggregateOutputType | null
  }

  type GetEventDefinitionGroupByPayload<T extends EventDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], EventDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type EventDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trackingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    trackedEvents?: boolean | EventDefinition$trackedEventsArgs<ExtArgs>
    _count?: boolean | EventDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventDefinition"]>

  export type EventDefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trackingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventDefinition"]>

  export type EventDefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trackingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventDefinition"]>

  export type EventDefinitionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    trackingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteId?: boolean
  }

  export type EventDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "trackingId" | "createdAt" | "updatedAt" | "siteId", ExtArgs["result"]["eventDefinition"]>
  export type EventDefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    trackedEvents?: boolean | EventDefinition$trackedEventsArgs<ExtArgs>
    _count?: boolean | EventDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventDefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type EventDefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $EventDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventDefinition"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      trackedEvents: Prisma.$TrackedEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      trackingId: string
      createdAt: Date
      updatedAt: Date
      siteId: string
    }, ExtArgs["result"]["eventDefinition"]>
    composites: {}
  }

  type EventDefinitionGetPayload<S extends boolean | null | undefined | EventDefinitionDefaultArgs> = $Result.GetResult<Prisma.$EventDefinitionPayload, S>

  type EventDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventDefinitionCountAggregateInputType | true
    }

  export interface EventDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventDefinition'], meta: { name: 'EventDefinition' } }
    /**
     * Find zero or one EventDefinition that matches the filter.
     * @param {EventDefinitionFindUniqueArgs} args - Arguments to find a EventDefinition
     * @example
     * // Get one EventDefinition
     * const eventDefinition = await prisma.eventDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventDefinitionFindUniqueArgs>(args: SelectSubset<T, EventDefinitionFindUniqueArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventDefinitionFindUniqueOrThrowArgs} args - Arguments to find a EventDefinition
     * @example
     * // Get one EventDefinition
     * const eventDefinition = await prisma.eventDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, EventDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDefinitionFindFirstArgs} args - Arguments to find a EventDefinition
     * @example
     * // Get one EventDefinition
     * const eventDefinition = await prisma.eventDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventDefinitionFindFirstArgs>(args?: SelectSubset<T, EventDefinitionFindFirstArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDefinitionFindFirstOrThrowArgs} args - Arguments to find a EventDefinition
     * @example
     * // Get one EventDefinition
     * const eventDefinition = await prisma.eventDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, EventDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventDefinitions
     * const eventDefinitions = await prisma.eventDefinition.findMany()
     * 
     * // Get first 10 EventDefinitions
     * const eventDefinitions = await prisma.eventDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventDefinitionWithIdOnly = await prisma.eventDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventDefinitionFindManyArgs>(args?: SelectSubset<T, EventDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventDefinition.
     * @param {EventDefinitionCreateArgs} args - Arguments to create a EventDefinition.
     * @example
     * // Create one EventDefinition
     * const EventDefinition = await prisma.eventDefinition.create({
     *   data: {
     *     // ... data to create a EventDefinition
     *   }
     * })
     * 
     */
    create<T extends EventDefinitionCreateArgs>(args: SelectSubset<T, EventDefinitionCreateArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventDefinitions.
     * @param {EventDefinitionCreateManyArgs} args - Arguments to create many EventDefinitions.
     * @example
     * // Create many EventDefinitions
     * const eventDefinition = await prisma.eventDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventDefinitionCreateManyArgs>(args?: SelectSubset<T, EventDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventDefinitions and returns the data saved in the database.
     * @param {EventDefinitionCreateManyAndReturnArgs} args - Arguments to create many EventDefinitions.
     * @example
     * // Create many EventDefinitions
     * const eventDefinition = await prisma.eventDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventDefinitions and only return the `id`
     * const eventDefinitionWithIdOnly = await prisma.eventDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventDefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, EventDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventDefinition.
     * @param {EventDefinitionDeleteArgs} args - Arguments to delete one EventDefinition.
     * @example
     * // Delete one EventDefinition
     * const EventDefinition = await prisma.eventDefinition.delete({
     *   where: {
     *     // ... filter to delete one EventDefinition
     *   }
     * })
     * 
     */
    delete<T extends EventDefinitionDeleteArgs>(args: SelectSubset<T, EventDefinitionDeleteArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventDefinition.
     * @param {EventDefinitionUpdateArgs} args - Arguments to update one EventDefinition.
     * @example
     * // Update one EventDefinition
     * const eventDefinition = await prisma.eventDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventDefinitionUpdateArgs>(args: SelectSubset<T, EventDefinitionUpdateArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventDefinitions.
     * @param {EventDefinitionDeleteManyArgs} args - Arguments to filter EventDefinitions to delete.
     * @example
     * // Delete a few EventDefinitions
     * const { count } = await prisma.eventDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDefinitionDeleteManyArgs>(args?: SelectSubset<T, EventDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventDefinitions
     * const eventDefinition = await prisma.eventDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventDefinitionUpdateManyArgs>(args: SelectSubset<T, EventDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventDefinitions and returns the data updated in the database.
     * @param {EventDefinitionUpdateManyAndReturnArgs} args - Arguments to update many EventDefinitions.
     * @example
     * // Update many EventDefinitions
     * const eventDefinition = await prisma.eventDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventDefinitions and only return the `id`
     * const eventDefinitionWithIdOnly = await prisma.eventDefinition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventDefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, EventDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventDefinition.
     * @param {EventDefinitionUpsertArgs} args - Arguments to update or create a EventDefinition.
     * @example
     * // Update or create a EventDefinition
     * const eventDefinition = await prisma.eventDefinition.upsert({
     *   create: {
     *     // ... data to create a EventDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventDefinition we want to update
     *   }
     * })
     */
    upsert<T extends EventDefinitionUpsertArgs>(args: SelectSubset<T, EventDefinitionUpsertArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDefinitionCountArgs} args - Arguments to filter EventDefinitions to count.
     * @example
     * // Count the number of EventDefinitions
     * const count = await prisma.eventDefinition.count({
     *   where: {
     *     // ... the filter for the EventDefinitions we want to count
     *   }
     * })
    **/
    count<T extends EventDefinitionCountArgs>(
      args?: Subset<T, EventDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventDefinitionAggregateArgs>(args: Subset<T, EventDefinitionAggregateArgs>): Prisma.PrismaPromise<GetEventDefinitionAggregateType<T>>

    /**
     * Group by EventDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDefinitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: EventDefinitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventDefinition model
   */
  readonly fields: EventDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trackedEvents<T extends EventDefinition$trackedEventsArgs<ExtArgs> = {}>(args?: Subset<T, EventDefinition$trackedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventDefinition model
   */
  interface EventDefinitionFieldRefs {
    readonly id: FieldRef<"EventDefinition", 'String'>
    readonly name: FieldRef<"EventDefinition", 'String'>
    readonly description: FieldRef<"EventDefinition", 'String'>
    readonly trackingId: FieldRef<"EventDefinition", 'String'>
    readonly createdAt: FieldRef<"EventDefinition", 'DateTime'>
    readonly updatedAt: FieldRef<"EventDefinition", 'DateTime'>
    readonly siteId: FieldRef<"EventDefinition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventDefinition findUnique
   */
  export type EventDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which EventDefinition to fetch.
     */
    where: EventDefinitionWhereUniqueInput
  }

  /**
   * EventDefinition findUniqueOrThrow
   */
  export type EventDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which EventDefinition to fetch.
     */
    where: EventDefinitionWhereUniqueInput
  }

  /**
   * EventDefinition findFirst
   */
  export type EventDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which EventDefinition to fetch.
     */
    where?: EventDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDefinitions to fetch.
     */
    orderBy?: EventDefinitionOrderByWithRelationInput | EventDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventDefinitions.
     */
    cursor?: EventDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventDefinitions.
     */
    distinct?: EventDefinitionScalarFieldEnum | EventDefinitionScalarFieldEnum[]
  }

  /**
   * EventDefinition findFirstOrThrow
   */
  export type EventDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which EventDefinition to fetch.
     */
    where?: EventDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDefinitions to fetch.
     */
    orderBy?: EventDefinitionOrderByWithRelationInput | EventDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventDefinitions.
     */
    cursor?: EventDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventDefinitions.
     */
    distinct?: EventDefinitionScalarFieldEnum | EventDefinitionScalarFieldEnum[]
  }

  /**
   * EventDefinition findMany
   */
  export type EventDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which EventDefinitions to fetch.
     */
    where?: EventDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDefinitions to fetch.
     */
    orderBy?: EventDefinitionOrderByWithRelationInput | EventDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventDefinitions.
     */
    cursor?: EventDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDefinitions.
     */
    skip?: number
    distinct?: EventDefinitionScalarFieldEnum | EventDefinitionScalarFieldEnum[]
  }

  /**
   * EventDefinition create
   */
  export type EventDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a EventDefinition.
     */
    data: XOR<EventDefinitionCreateInput, EventDefinitionUncheckedCreateInput>
  }

  /**
   * EventDefinition createMany
   */
  export type EventDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventDefinitions.
     */
    data: EventDefinitionCreateManyInput | EventDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventDefinition createManyAndReturn
   */
  export type EventDefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many EventDefinitions.
     */
    data: EventDefinitionCreateManyInput | EventDefinitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventDefinition update
   */
  export type EventDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a EventDefinition.
     */
    data: XOR<EventDefinitionUpdateInput, EventDefinitionUncheckedUpdateInput>
    /**
     * Choose, which EventDefinition to update.
     */
    where: EventDefinitionWhereUniqueInput
  }

  /**
   * EventDefinition updateMany
   */
  export type EventDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventDefinitions.
     */
    data: XOR<EventDefinitionUpdateManyMutationInput, EventDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which EventDefinitions to update
     */
    where?: EventDefinitionWhereInput
    /**
     * Limit how many EventDefinitions to update.
     */
    limit?: number
  }

  /**
   * EventDefinition updateManyAndReturn
   */
  export type EventDefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * The data used to update EventDefinitions.
     */
    data: XOR<EventDefinitionUpdateManyMutationInput, EventDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which EventDefinitions to update
     */
    where?: EventDefinitionWhereInput
    /**
     * Limit how many EventDefinitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventDefinition upsert
   */
  export type EventDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the EventDefinition to update in case it exists.
     */
    where: EventDefinitionWhereUniqueInput
    /**
     * In case the EventDefinition found by the `where` argument doesn't exist, create a new EventDefinition with this data.
     */
    create: XOR<EventDefinitionCreateInput, EventDefinitionUncheckedCreateInput>
    /**
     * In case the EventDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventDefinitionUpdateInput, EventDefinitionUncheckedUpdateInput>
  }

  /**
   * EventDefinition delete
   */
  export type EventDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
    /**
     * Filter which EventDefinition to delete.
     */
    where: EventDefinitionWhereUniqueInput
  }

  /**
   * EventDefinition deleteMany
   */
  export type EventDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventDefinitions to delete
     */
    where?: EventDefinitionWhereInput
    /**
     * Limit how many EventDefinitions to delete.
     */
    limit?: number
  }

  /**
   * EventDefinition.trackedEvents
   */
  export type EventDefinition$trackedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    where?: TrackedEventWhereInput
    orderBy?: TrackedEventOrderByWithRelationInput | TrackedEventOrderByWithRelationInput[]
    cursor?: TrackedEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackedEventScalarFieldEnum | TrackedEventScalarFieldEnum[]
  }

  /**
   * EventDefinition without action
   */
  export type EventDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDefinition
     */
    select?: EventDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDefinition
     */
    omit?: EventDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDefinitionInclude<ExtArgs> | null
  }


  /**
   * Model TrackedEvent
   */

  export type AggregateTrackedEvent = {
    _count: TrackedEventCountAggregateOutputType | null
    _min: TrackedEventMinAggregateOutputType | null
    _max: TrackedEventMaxAggregateOutputType | null
  }

  export type TrackedEventMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    createdAt: Date | null
    eventDefinitionId: string | null
    siteId: string | null
  }

  export type TrackedEventMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    createdAt: Date | null
    eventDefinitionId: string | null
    siteId: string | null
  }

  export type TrackedEventCountAggregateOutputType = {
    id: number
    timestamp: number
    metadata: number
    createdAt: number
    eventDefinitionId: number
    siteId: number
    _all: number
  }


  export type TrackedEventMinAggregateInputType = {
    id?: true
    timestamp?: true
    createdAt?: true
    eventDefinitionId?: true
    siteId?: true
  }

  export type TrackedEventMaxAggregateInputType = {
    id?: true
    timestamp?: true
    createdAt?: true
    eventDefinitionId?: true
    siteId?: true
  }

  export type TrackedEventCountAggregateInputType = {
    id?: true
    timestamp?: true
    metadata?: true
    createdAt?: true
    eventDefinitionId?: true
    siteId?: true
    _all?: true
  }

  export type TrackedEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedEvent to aggregate.
     */
    where?: TrackedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEvents to fetch.
     */
    orderBy?: TrackedEventOrderByWithRelationInput | TrackedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedEvents
    **/
    _count?: true | TrackedEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedEventMaxAggregateInputType
  }

  export type GetTrackedEventAggregateType<T extends TrackedEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedEvent[P]>
      : GetScalarType<T[P], AggregateTrackedEvent[P]>
  }




  export type TrackedEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedEventWhereInput
    orderBy?: TrackedEventOrderByWithAggregationInput | TrackedEventOrderByWithAggregationInput[]
    by: TrackedEventScalarFieldEnum[] | TrackedEventScalarFieldEnum
    having?: TrackedEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedEventCountAggregateInputType | true
    _min?: TrackedEventMinAggregateInputType
    _max?: TrackedEventMaxAggregateInputType
  }

  export type TrackedEventGroupByOutputType = {
    id: string
    timestamp: Date
    metadata: JsonValue | null
    createdAt: Date
    eventDefinitionId: string
    siteId: string
    _count: TrackedEventCountAggregateOutputType | null
    _min: TrackedEventMinAggregateOutputType | null
    _max: TrackedEventMaxAggregateOutputType | null
  }

  type GetTrackedEventGroupByPayload<T extends TrackedEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedEventGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedEventGroupByOutputType[P]>
        }
      >
    >


  export type TrackedEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    eventDefinitionId?: boolean
    siteId?: boolean
    eventDefinition?: boolean | EventDefinitionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedEvent"]>

  export type TrackedEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    eventDefinitionId?: boolean
    siteId?: boolean
    eventDefinition?: boolean | EventDefinitionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedEvent"]>

  export type TrackedEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    eventDefinitionId?: boolean
    siteId?: boolean
    eventDefinition?: boolean | EventDefinitionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedEvent"]>

  export type TrackedEventSelectScalar = {
    id?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    eventDefinitionId?: boolean
    siteId?: boolean
  }

  export type TrackedEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "metadata" | "createdAt" | "eventDefinitionId" | "siteId", ExtArgs["result"]["trackedEvent"]>
  export type TrackedEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventDefinition?: boolean | EventDefinitionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type TrackedEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventDefinition?: boolean | EventDefinitionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type TrackedEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventDefinition?: boolean | EventDefinitionDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $TrackedEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedEvent"
    objects: {
      eventDefinition: Prisma.$EventDefinitionPayload<ExtArgs>
      site: Prisma.$SitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      metadata: Prisma.JsonValue | null
      createdAt: Date
      eventDefinitionId: string
      siteId: string
    }, ExtArgs["result"]["trackedEvent"]>
    composites: {}
  }

  type TrackedEventGetPayload<S extends boolean | null | undefined | TrackedEventDefaultArgs> = $Result.GetResult<Prisma.$TrackedEventPayload, S>

  type TrackedEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackedEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackedEventCountAggregateInputType | true
    }

  export interface TrackedEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedEvent'], meta: { name: 'TrackedEvent' } }
    /**
     * Find zero or one TrackedEvent that matches the filter.
     * @param {TrackedEventFindUniqueArgs} args - Arguments to find a TrackedEvent
     * @example
     * // Get one TrackedEvent
     * const trackedEvent = await prisma.trackedEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackedEventFindUniqueArgs>(args: SelectSubset<T, TrackedEventFindUniqueArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackedEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackedEventFindUniqueOrThrowArgs} args - Arguments to find a TrackedEvent
     * @example
     * // Get one TrackedEvent
     * const trackedEvent = await prisma.trackedEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackedEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackedEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEventFindFirstArgs} args - Arguments to find a TrackedEvent
     * @example
     * // Get one TrackedEvent
     * const trackedEvent = await prisma.trackedEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackedEventFindFirstArgs>(args?: SelectSubset<T, TrackedEventFindFirstArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEventFindFirstOrThrowArgs} args - Arguments to find a TrackedEvent
     * @example
     * // Get one TrackedEvent
     * const trackedEvent = await prisma.trackedEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackedEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackedEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackedEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedEvents
     * const trackedEvents = await prisma.trackedEvent.findMany()
     * 
     * // Get first 10 TrackedEvents
     * const trackedEvents = await prisma.trackedEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackedEventWithIdOnly = await prisma.trackedEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackedEventFindManyArgs>(args?: SelectSubset<T, TrackedEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackedEvent.
     * @param {TrackedEventCreateArgs} args - Arguments to create a TrackedEvent.
     * @example
     * // Create one TrackedEvent
     * const TrackedEvent = await prisma.trackedEvent.create({
     *   data: {
     *     // ... data to create a TrackedEvent
     *   }
     * })
     * 
     */
    create<T extends TrackedEventCreateArgs>(args: SelectSubset<T, TrackedEventCreateArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackedEvents.
     * @param {TrackedEventCreateManyArgs} args - Arguments to create many TrackedEvents.
     * @example
     * // Create many TrackedEvents
     * const trackedEvent = await prisma.trackedEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackedEventCreateManyArgs>(args?: SelectSubset<T, TrackedEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackedEvents and returns the data saved in the database.
     * @param {TrackedEventCreateManyAndReturnArgs} args - Arguments to create many TrackedEvents.
     * @example
     * // Create many TrackedEvents
     * const trackedEvent = await prisma.trackedEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackedEvents and only return the `id`
     * const trackedEventWithIdOnly = await prisma.trackedEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackedEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackedEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackedEvent.
     * @param {TrackedEventDeleteArgs} args - Arguments to delete one TrackedEvent.
     * @example
     * // Delete one TrackedEvent
     * const TrackedEvent = await prisma.trackedEvent.delete({
     *   where: {
     *     // ... filter to delete one TrackedEvent
     *   }
     * })
     * 
     */
    delete<T extends TrackedEventDeleteArgs>(args: SelectSubset<T, TrackedEventDeleteArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackedEvent.
     * @param {TrackedEventUpdateArgs} args - Arguments to update one TrackedEvent.
     * @example
     * // Update one TrackedEvent
     * const trackedEvent = await prisma.trackedEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackedEventUpdateArgs>(args: SelectSubset<T, TrackedEventUpdateArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackedEvents.
     * @param {TrackedEventDeleteManyArgs} args - Arguments to filter TrackedEvents to delete.
     * @example
     * // Delete a few TrackedEvents
     * const { count } = await prisma.trackedEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackedEventDeleteManyArgs>(args?: SelectSubset<T, TrackedEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedEvents
     * const trackedEvent = await prisma.trackedEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackedEventUpdateManyArgs>(args: SelectSubset<T, TrackedEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedEvents and returns the data updated in the database.
     * @param {TrackedEventUpdateManyAndReturnArgs} args - Arguments to update many TrackedEvents.
     * @example
     * // Update many TrackedEvents
     * const trackedEvent = await prisma.trackedEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackedEvents and only return the `id`
     * const trackedEventWithIdOnly = await prisma.trackedEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackedEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackedEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackedEvent.
     * @param {TrackedEventUpsertArgs} args - Arguments to update or create a TrackedEvent.
     * @example
     * // Update or create a TrackedEvent
     * const trackedEvent = await prisma.trackedEvent.upsert({
     *   create: {
     *     // ... data to create a TrackedEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedEvent we want to update
     *   }
     * })
     */
    upsert<T extends TrackedEventUpsertArgs>(args: SelectSubset<T, TrackedEventUpsertArgs<ExtArgs>>): Prisma__TrackedEventClient<$Result.GetResult<Prisma.$TrackedEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackedEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEventCountArgs} args - Arguments to filter TrackedEvents to count.
     * @example
     * // Count the number of TrackedEvents
     * const count = await prisma.trackedEvent.count({
     *   where: {
     *     // ... the filter for the TrackedEvents we want to count
     *   }
     * })
    **/
    count<T extends TrackedEventCountArgs>(
      args?: Subset<T, TrackedEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackedEventAggregateArgs>(args: Subset<T, TrackedEventAggregateArgs>): Prisma.PrismaPromise<GetTrackedEventAggregateType<T>>

    /**
     * Group by TrackedEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackedEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedEventGroupByArgs['orderBy'] }
        : { orderBy?: TrackedEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackedEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedEvent model
   */
  readonly fields: TrackedEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventDefinition<T extends EventDefinitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefinitionDefaultArgs<ExtArgs>>): Prisma__EventDefinitionClient<$Result.GetResult<Prisma.$EventDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackedEvent model
   */
  interface TrackedEventFieldRefs {
    readonly id: FieldRef<"TrackedEvent", 'String'>
    readonly timestamp: FieldRef<"TrackedEvent", 'DateTime'>
    readonly metadata: FieldRef<"TrackedEvent", 'Json'>
    readonly createdAt: FieldRef<"TrackedEvent", 'DateTime'>
    readonly eventDefinitionId: FieldRef<"TrackedEvent", 'String'>
    readonly siteId: FieldRef<"TrackedEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrackedEvent findUnique
   */
  export type TrackedEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEvent to fetch.
     */
    where: TrackedEventWhereUniqueInput
  }

  /**
   * TrackedEvent findUniqueOrThrow
   */
  export type TrackedEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEvent to fetch.
     */
    where: TrackedEventWhereUniqueInput
  }

  /**
   * TrackedEvent findFirst
   */
  export type TrackedEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEvent to fetch.
     */
    where?: TrackedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEvents to fetch.
     */
    orderBy?: TrackedEventOrderByWithRelationInput | TrackedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedEvents.
     */
    cursor?: TrackedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedEvents.
     */
    distinct?: TrackedEventScalarFieldEnum | TrackedEventScalarFieldEnum[]
  }

  /**
   * TrackedEvent findFirstOrThrow
   */
  export type TrackedEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEvent to fetch.
     */
    where?: TrackedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEvents to fetch.
     */
    orderBy?: TrackedEventOrderByWithRelationInput | TrackedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedEvents.
     */
    cursor?: TrackedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedEvents.
     */
    distinct?: TrackedEventScalarFieldEnum | TrackedEventScalarFieldEnum[]
  }

  /**
   * TrackedEvent findMany
   */
  export type TrackedEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEvents to fetch.
     */
    where?: TrackedEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEvents to fetch.
     */
    orderBy?: TrackedEventOrderByWithRelationInput | TrackedEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedEvents.
     */
    cursor?: TrackedEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEvents.
     */
    skip?: number
    distinct?: TrackedEventScalarFieldEnum | TrackedEventScalarFieldEnum[]
  }

  /**
   * TrackedEvent create
   */
  export type TrackedEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackedEvent.
     */
    data: XOR<TrackedEventCreateInput, TrackedEventUncheckedCreateInput>
  }

  /**
   * TrackedEvent createMany
   */
  export type TrackedEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackedEvents.
     */
    data: TrackedEventCreateManyInput | TrackedEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedEvent createManyAndReturn
   */
  export type TrackedEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * The data used to create many TrackedEvents.
     */
    data: TrackedEventCreateManyInput | TrackedEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedEvent update
   */
  export type TrackedEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackedEvent.
     */
    data: XOR<TrackedEventUpdateInput, TrackedEventUncheckedUpdateInput>
    /**
     * Choose, which TrackedEvent to update.
     */
    where: TrackedEventWhereUniqueInput
  }

  /**
   * TrackedEvent updateMany
   */
  export type TrackedEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedEvents.
     */
    data: XOR<TrackedEventUpdateManyMutationInput, TrackedEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackedEvents to update
     */
    where?: TrackedEventWhereInput
    /**
     * Limit how many TrackedEvents to update.
     */
    limit?: number
  }

  /**
   * TrackedEvent updateManyAndReturn
   */
  export type TrackedEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * The data used to update TrackedEvents.
     */
    data: XOR<TrackedEventUpdateManyMutationInput, TrackedEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackedEvents to update
     */
    where?: TrackedEventWhereInput
    /**
     * Limit how many TrackedEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedEvent upsert
   */
  export type TrackedEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackedEvent to update in case it exists.
     */
    where: TrackedEventWhereUniqueInput
    /**
     * In case the TrackedEvent found by the `where` argument doesn't exist, create a new TrackedEvent with this data.
     */
    create: XOR<TrackedEventCreateInput, TrackedEventUncheckedCreateInput>
    /**
     * In case the TrackedEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedEventUpdateInput, TrackedEventUncheckedUpdateInput>
  }

  /**
   * TrackedEvent delete
   */
  export type TrackedEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
    /**
     * Filter which TrackedEvent to delete.
     */
    where: TrackedEventWhereUniqueInput
  }

  /**
   * TrackedEvent deleteMany
   */
  export type TrackedEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedEvents to delete
     */
    where?: TrackedEventWhereInput
    /**
     * Limit how many TrackedEvents to delete.
     */
    limit?: number
  }

  /**
   * TrackedEvent without action
   */
  export type TrackedEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEvent
     */
    select?: TrackedEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEvent
     */
    omit?: TrackedEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEventInclude<ExtArgs> | null
  }


  /**
   * Model TrackedSession
   */

  export type AggregateTrackedSession = {
    _count: TrackedSessionCountAggregateOutputType | null
    _avg: TrackedSessionAvgAggregateOutputType | null
    _sum: TrackedSessionSumAggregateOutputType | null
    _min: TrackedSessionMinAggregateOutputType | null
    _max: TrackedSessionMaxAggregateOutputType | null
  }

  export type TrackedSessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type TrackedSessionSumAggregateOutputType = {
    duration: number | null
  }

  export type TrackedSessionMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    siteId: string | null
    startedAt: Date | null
    endedAt: Date | null
    duration: number | null
    didBounce: boolean | null
    visitorId: string | null
    entryPage: string | null
    exitPage: string | null
    userAgent: string | null
    country: string | null
    city: string | null
  }

  export type TrackedSessionMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    siteId: string | null
    startedAt: Date | null
    endedAt: Date | null
    duration: number | null
    didBounce: boolean | null
    visitorId: string | null
    entryPage: string | null
    exitPage: string | null
    userAgent: string | null
    country: string | null
    city: string | null
  }

  export type TrackedSessionCountAggregateOutputType = {
    id: number
    sessionId: number
    siteId: number
    startedAt: number
    endedAt: number
    duration: number
    didBounce: number
    visitorId: number
    entryPage: number
    exitPage: number
    userAgent: number
    country: number
    city: number
    _all: number
  }


  export type TrackedSessionAvgAggregateInputType = {
    duration?: true
  }

  export type TrackedSessionSumAggregateInputType = {
    duration?: true
  }

  export type TrackedSessionMinAggregateInputType = {
    id?: true
    sessionId?: true
    siteId?: true
    startedAt?: true
    endedAt?: true
    duration?: true
    didBounce?: true
    visitorId?: true
    entryPage?: true
    exitPage?: true
    userAgent?: true
    country?: true
    city?: true
  }

  export type TrackedSessionMaxAggregateInputType = {
    id?: true
    sessionId?: true
    siteId?: true
    startedAt?: true
    endedAt?: true
    duration?: true
    didBounce?: true
    visitorId?: true
    entryPage?: true
    exitPage?: true
    userAgent?: true
    country?: true
    city?: true
  }

  export type TrackedSessionCountAggregateInputType = {
    id?: true
    sessionId?: true
    siteId?: true
    startedAt?: true
    endedAt?: true
    duration?: true
    didBounce?: true
    visitorId?: true
    entryPage?: true
    exitPage?: true
    userAgent?: true
    country?: true
    city?: true
    _all?: true
  }

  export type TrackedSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedSession to aggregate.
     */
    where?: TrackedSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSessions to fetch.
     */
    orderBy?: TrackedSessionOrderByWithRelationInput | TrackedSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedSessions
    **/
    _count?: true | TrackedSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackedSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackedSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedSessionMaxAggregateInputType
  }

  export type GetTrackedSessionAggregateType<T extends TrackedSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedSession[P]>
      : GetScalarType<T[P], AggregateTrackedSession[P]>
  }




  export type TrackedSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedSessionWhereInput
    orderBy?: TrackedSessionOrderByWithAggregationInput | TrackedSessionOrderByWithAggregationInput[]
    by: TrackedSessionScalarFieldEnum[] | TrackedSessionScalarFieldEnum
    having?: TrackedSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedSessionCountAggregateInputType | true
    _avg?: TrackedSessionAvgAggregateInputType
    _sum?: TrackedSessionSumAggregateInputType
    _min?: TrackedSessionMinAggregateInputType
    _max?: TrackedSessionMaxAggregateInputType
  }

  export type TrackedSessionGroupByOutputType = {
    id: string
    sessionId: string
    siteId: string
    startedAt: Date
    endedAt: Date | null
    duration: number | null
    didBounce: boolean
    visitorId: string | null
    entryPage: string
    exitPage: string | null
    userAgent: string | null
    country: string | null
    city: string | null
    _count: TrackedSessionCountAggregateOutputType | null
    _avg: TrackedSessionAvgAggregateOutputType | null
    _sum: TrackedSessionSumAggregateOutputType | null
    _min: TrackedSessionMinAggregateOutputType | null
    _max: TrackedSessionMaxAggregateOutputType | null
  }

  type GetTrackedSessionGroupByPayload<T extends TrackedSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedSessionGroupByOutputType[P]>
        }
      >
    >


  export type TrackedSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    siteId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    didBounce?: boolean
    visitorId?: boolean
    entryPage?: boolean
    exitPage?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    pageViewEvents?: boolean | TrackedSession$pageViewEventsArgs<ExtArgs>
    _count?: boolean | TrackedSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedSession"]>

  export type TrackedSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    siteId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    didBounce?: boolean
    visitorId?: boolean
    entryPage?: boolean
    exitPage?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedSession"]>

  export type TrackedSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    siteId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    didBounce?: boolean
    visitorId?: boolean
    entryPage?: boolean
    exitPage?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedSession"]>

  export type TrackedSessionSelectScalar = {
    id?: boolean
    sessionId?: boolean
    siteId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    duration?: boolean
    didBounce?: boolean
    visitorId?: boolean
    entryPage?: boolean
    exitPage?: boolean
    userAgent?: boolean
    country?: boolean
    city?: boolean
  }

  export type TrackedSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "siteId" | "startedAt" | "endedAt" | "duration" | "didBounce" | "visitorId" | "entryPage" | "exitPage" | "userAgent" | "country" | "city", ExtArgs["result"]["trackedSession"]>
  export type TrackedSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    pageViewEvents?: boolean | TrackedSession$pageViewEventsArgs<ExtArgs>
    _count?: boolean | TrackedSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackedSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type TrackedSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $TrackedSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedSession"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      pageViewEvents: Prisma.$PageViewEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      siteId: string
      startedAt: Date
      endedAt: Date | null
      duration: number | null
      didBounce: boolean
      visitorId: string | null
      entryPage: string
      exitPage: string | null
      userAgent: string | null
      country: string | null
      city: string | null
    }, ExtArgs["result"]["trackedSession"]>
    composites: {}
  }

  type TrackedSessionGetPayload<S extends boolean | null | undefined | TrackedSessionDefaultArgs> = $Result.GetResult<Prisma.$TrackedSessionPayload, S>

  type TrackedSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackedSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackedSessionCountAggregateInputType | true
    }

  export interface TrackedSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedSession'], meta: { name: 'TrackedSession' } }
    /**
     * Find zero or one TrackedSession that matches the filter.
     * @param {TrackedSessionFindUniqueArgs} args - Arguments to find a TrackedSession
     * @example
     * // Get one TrackedSession
     * const trackedSession = await prisma.trackedSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackedSessionFindUniqueArgs>(args: SelectSubset<T, TrackedSessionFindUniqueArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackedSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackedSessionFindUniqueOrThrowArgs} args - Arguments to find a TrackedSession
     * @example
     * // Get one TrackedSession
     * const trackedSession = await prisma.trackedSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackedSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackedSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSessionFindFirstArgs} args - Arguments to find a TrackedSession
     * @example
     * // Get one TrackedSession
     * const trackedSession = await prisma.trackedSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackedSessionFindFirstArgs>(args?: SelectSubset<T, TrackedSessionFindFirstArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSessionFindFirstOrThrowArgs} args - Arguments to find a TrackedSession
     * @example
     * // Get one TrackedSession
     * const trackedSession = await prisma.trackedSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackedSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackedSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackedSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedSessions
     * const trackedSessions = await prisma.trackedSession.findMany()
     * 
     * // Get first 10 TrackedSessions
     * const trackedSessions = await prisma.trackedSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackedSessionWithIdOnly = await prisma.trackedSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackedSessionFindManyArgs>(args?: SelectSubset<T, TrackedSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackedSession.
     * @param {TrackedSessionCreateArgs} args - Arguments to create a TrackedSession.
     * @example
     * // Create one TrackedSession
     * const TrackedSession = await prisma.trackedSession.create({
     *   data: {
     *     // ... data to create a TrackedSession
     *   }
     * })
     * 
     */
    create<T extends TrackedSessionCreateArgs>(args: SelectSubset<T, TrackedSessionCreateArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackedSessions.
     * @param {TrackedSessionCreateManyArgs} args - Arguments to create many TrackedSessions.
     * @example
     * // Create many TrackedSessions
     * const trackedSession = await prisma.trackedSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackedSessionCreateManyArgs>(args?: SelectSubset<T, TrackedSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackedSessions and returns the data saved in the database.
     * @param {TrackedSessionCreateManyAndReturnArgs} args - Arguments to create many TrackedSessions.
     * @example
     * // Create many TrackedSessions
     * const trackedSession = await prisma.trackedSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackedSessions and only return the `id`
     * const trackedSessionWithIdOnly = await prisma.trackedSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackedSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackedSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackedSession.
     * @param {TrackedSessionDeleteArgs} args - Arguments to delete one TrackedSession.
     * @example
     * // Delete one TrackedSession
     * const TrackedSession = await prisma.trackedSession.delete({
     *   where: {
     *     // ... filter to delete one TrackedSession
     *   }
     * })
     * 
     */
    delete<T extends TrackedSessionDeleteArgs>(args: SelectSubset<T, TrackedSessionDeleteArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackedSession.
     * @param {TrackedSessionUpdateArgs} args - Arguments to update one TrackedSession.
     * @example
     * // Update one TrackedSession
     * const trackedSession = await prisma.trackedSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackedSessionUpdateArgs>(args: SelectSubset<T, TrackedSessionUpdateArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackedSessions.
     * @param {TrackedSessionDeleteManyArgs} args - Arguments to filter TrackedSessions to delete.
     * @example
     * // Delete a few TrackedSessions
     * const { count } = await prisma.trackedSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackedSessionDeleteManyArgs>(args?: SelectSubset<T, TrackedSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedSessions
     * const trackedSession = await prisma.trackedSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackedSessionUpdateManyArgs>(args: SelectSubset<T, TrackedSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedSessions and returns the data updated in the database.
     * @param {TrackedSessionUpdateManyAndReturnArgs} args - Arguments to update many TrackedSessions.
     * @example
     * // Update many TrackedSessions
     * const trackedSession = await prisma.trackedSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackedSessions and only return the `id`
     * const trackedSessionWithIdOnly = await prisma.trackedSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackedSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackedSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackedSession.
     * @param {TrackedSessionUpsertArgs} args - Arguments to update or create a TrackedSession.
     * @example
     * // Update or create a TrackedSession
     * const trackedSession = await prisma.trackedSession.upsert({
     *   create: {
     *     // ... data to create a TrackedSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedSession we want to update
     *   }
     * })
     */
    upsert<T extends TrackedSessionUpsertArgs>(args: SelectSubset<T, TrackedSessionUpsertArgs<ExtArgs>>): Prisma__TrackedSessionClient<$Result.GetResult<Prisma.$TrackedSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackedSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSessionCountArgs} args - Arguments to filter TrackedSessions to count.
     * @example
     * // Count the number of TrackedSessions
     * const count = await prisma.trackedSession.count({
     *   where: {
     *     // ... the filter for the TrackedSessions we want to count
     *   }
     * })
    **/
    count<T extends TrackedSessionCountArgs>(
      args?: Subset<T, TrackedSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackedSessionAggregateArgs>(args: Subset<T, TrackedSessionAggregateArgs>): Prisma.PrismaPromise<GetTrackedSessionAggregateType<T>>

    /**
     * Group by TrackedSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackedSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedSessionGroupByArgs['orderBy'] }
        : { orderBy?: TrackedSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackedSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedSession model
   */
  readonly fields: TrackedSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pageViewEvents<T extends TrackedSession$pageViewEventsArgs<ExtArgs> = {}>(args?: Subset<T, TrackedSession$pageViewEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackedSession model
   */
  interface TrackedSessionFieldRefs {
    readonly id: FieldRef<"TrackedSession", 'String'>
    readonly sessionId: FieldRef<"TrackedSession", 'String'>
    readonly siteId: FieldRef<"TrackedSession", 'String'>
    readonly startedAt: FieldRef<"TrackedSession", 'DateTime'>
    readonly endedAt: FieldRef<"TrackedSession", 'DateTime'>
    readonly duration: FieldRef<"TrackedSession", 'Int'>
    readonly didBounce: FieldRef<"TrackedSession", 'Boolean'>
    readonly visitorId: FieldRef<"TrackedSession", 'String'>
    readonly entryPage: FieldRef<"TrackedSession", 'String'>
    readonly exitPage: FieldRef<"TrackedSession", 'String'>
    readonly userAgent: FieldRef<"TrackedSession", 'String'>
    readonly country: FieldRef<"TrackedSession", 'String'>
    readonly city: FieldRef<"TrackedSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrackedSession findUnique
   */
  export type TrackedSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrackedSession to fetch.
     */
    where: TrackedSessionWhereUniqueInput
  }

  /**
   * TrackedSession findUniqueOrThrow
   */
  export type TrackedSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrackedSession to fetch.
     */
    where: TrackedSessionWhereUniqueInput
  }

  /**
   * TrackedSession findFirst
   */
  export type TrackedSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrackedSession to fetch.
     */
    where?: TrackedSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSessions to fetch.
     */
    orderBy?: TrackedSessionOrderByWithRelationInput | TrackedSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedSessions.
     */
    cursor?: TrackedSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedSessions.
     */
    distinct?: TrackedSessionScalarFieldEnum | TrackedSessionScalarFieldEnum[]
  }

  /**
   * TrackedSession findFirstOrThrow
   */
  export type TrackedSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrackedSession to fetch.
     */
    where?: TrackedSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSessions to fetch.
     */
    orderBy?: TrackedSessionOrderByWithRelationInput | TrackedSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedSessions.
     */
    cursor?: TrackedSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedSessions.
     */
    distinct?: TrackedSessionScalarFieldEnum | TrackedSessionScalarFieldEnum[]
  }

  /**
   * TrackedSession findMany
   */
  export type TrackedSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrackedSessions to fetch.
     */
    where?: TrackedSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSessions to fetch.
     */
    orderBy?: TrackedSessionOrderByWithRelationInput | TrackedSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedSessions.
     */
    cursor?: TrackedSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSessions.
     */
    skip?: number
    distinct?: TrackedSessionScalarFieldEnum | TrackedSessionScalarFieldEnum[]
  }

  /**
   * TrackedSession create
   */
  export type TrackedSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackedSession.
     */
    data: XOR<TrackedSessionCreateInput, TrackedSessionUncheckedCreateInput>
  }

  /**
   * TrackedSession createMany
   */
  export type TrackedSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackedSessions.
     */
    data: TrackedSessionCreateManyInput | TrackedSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedSession createManyAndReturn
   */
  export type TrackedSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TrackedSessions.
     */
    data: TrackedSessionCreateManyInput | TrackedSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedSession update
   */
  export type TrackedSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackedSession.
     */
    data: XOR<TrackedSessionUpdateInput, TrackedSessionUncheckedUpdateInput>
    /**
     * Choose, which TrackedSession to update.
     */
    where: TrackedSessionWhereUniqueInput
  }

  /**
   * TrackedSession updateMany
   */
  export type TrackedSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedSessions.
     */
    data: XOR<TrackedSessionUpdateManyMutationInput, TrackedSessionUncheckedUpdateManyInput>
    /**
     * Filter which TrackedSessions to update
     */
    where?: TrackedSessionWhereInput
    /**
     * Limit how many TrackedSessions to update.
     */
    limit?: number
  }

  /**
   * TrackedSession updateManyAndReturn
   */
  export type TrackedSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * The data used to update TrackedSessions.
     */
    data: XOR<TrackedSessionUpdateManyMutationInput, TrackedSessionUncheckedUpdateManyInput>
    /**
     * Filter which TrackedSessions to update
     */
    where?: TrackedSessionWhereInput
    /**
     * Limit how many TrackedSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedSession upsert
   */
  export type TrackedSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackedSession to update in case it exists.
     */
    where: TrackedSessionWhereUniqueInput
    /**
     * In case the TrackedSession found by the `where` argument doesn't exist, create a new TrackedSession with this data.
     */
    create: XOR<TrackedSessionCreateInput, TrackedSessionUncheckedCreateInput>
    /**
     * In case the TrackedSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedSessionUpdateInput, TrackedSessionUncheckedUpdateInput>
  }

  /**
   * TrackedSession delete
   */
  export type TrackedSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
    /**
     * Filter which TrackedSession to delete.
     */
    where: TrackedSessionWhereUniqueInput
  }

  /**
   * TrackedSession deleteMany
   */
  export type TrackedSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedSessions to delete
     */
    where?: TrackedSessionWhereInput
    /**
     * Limit how many TrackedSessions to delete.
     */
    limit?: number
  }

  /**
   * TrackedSession.pageViewEvents
   */
  export type TrackedSession$pageViewEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageViewEvent
     */
    select?: PageViewEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageViewEvent
     */
    omit?: PageViewEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewEventInclude<ExtArgs> | null
    where?: PageViewEventWhereInput
    orderBy?: PageViewEventOrderByWithRelationInput | PageViewEventOrderByWithRelationInput[]
    cursor?: PageViewEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageViewEventScalarFieldEnum | PageViewEventScalarFieldEnum[]
  }

  /**
   * TrackedSession without action
   */
  export type TrackedSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSession
     */
    select?: TrackedSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedSession
     */
    omit?: TrackedSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    plan: 'plan',
    polarSubscriptionId: 'polarSubscriptionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    joinedAt: 'joinedAt',
    userId: 'userId',
    teamId: 'teamId'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    teamId: 'teamId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    polarProductId: 'polarProductId',
    name: 'name',
    description: 'description',
    type: 'type',
    priceAmount: 'priceAmount',
    currency: 'currency',
    interval: 'interval',
    isActive: 'isActive',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const SubscriptionPlanBenefitScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    name: 'name',
    description: 'description',
    type: 'type',
    value: 'value',
    createdAt: 'createdAt'
  };

  export type SubscriptionPlanBenefitScalarFieldEnum = (typeof SubscriptionPlanBenefitScalarFieldEnum)[keyof typeof SubscriptionPlanBenefitScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    polarSubscriptionId: 'polarSubscriptionId',
    polarCustomerId: 'polarCustomerId',
    status: 'status',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    canceledAt: 'canceledAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    planId: 'planId',
    teamId: 'teamId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PageViewEventScalarFieldEnum: {
    id: 'id',
    url: 'url',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    ip: 'ip',
    country: 'country',
    countryCode: 'countryCode',
    region: 'region',
    regionName: 'regionName',
    city: 'city',
    zip: 'zip',
    lat: 'lat',
    lon: 'lon',
    timezone: 'timezone',
    isp: 'isp',
    mobile: 'mobile',
    userAgent: 'userAgent',
    siteId: 'siteId',
    sessionId: 'sessionId'
  };

  export type PageViewEventScalarFieldEnum = (typeof PageViewEventScalarFieldEnum)[keyof typeof PageViewEventScalarFieldEnum]


  export const EventDefinitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    trackingId: 'trackingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    siteId: 'siteId'
  };

  export type EventDefinitionScalarFieldEnum = (typeof EventDefinitionScalarFieldEnum)[keyof typeof EventDefinitionScalarFieldEnum]


  export const TrackedEventScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    metadata: 'metadata',
    createdAt: 'createdAt',
    eventDefinitionId: 'eventDefinitionId',
    siteId: 'siteId'
  };

  export type TrackedEventScalarFieldEnum = (typeof TrackedEventScalarFieldEnum)[keyof typeof TrackedEventScalarFieldEnum]


  export const TrackedSessionScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    siteId: 'siteId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    duration: 'duration',
    didBounce: 'didBounce',
    visitorId: 'visitorId',
    entryPage: 'entryPage',
    exitPage: 'exitPage',
    userAgent: 'userAgent',
    country: 'country',
    city: 'city'
  };

  export type TrackedSessionScalarFieldEnum = (typeof TrackedSessionScalarFieldEnum)[keyof typeof TrackedSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    teamMemberships?: TeamMemberListRelationFilter
    sites?: SiteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    teamMemberships?: TeamMemberOrderByRelationAggregateInput
    sites?: SiteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    teamMemberships?: TeamMemberListRelationFilter
    sites?: SiteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    slug?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    plan?: StringFilter<"Team"> | string
    polarSubscriptionId?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    sites?: SiteListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    plan?: SortOrder
    polarSubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: TeamMemberOrderByRelationAggregateInput
    sites?: SiteOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    polarSubscriptionId?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    plan?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    sites?: SiteListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "slug" | "polarSubscriptionId">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    plan?: SortOrder
    polarSubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    slug?: StringWithAggregatesFilter<"Team"> | string
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null
    plan?: StringWithAggregatesFilter<"Team"> | string
    polarSubscriptionId?: StringNullableWithAggregatesFilter<"Team"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: TeamMemberUserIdTeamIdCompoundUniqueInput
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    role?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "userId_teamId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: StringWithAggregatesFilter<"TeamMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    userId?: StringWithAggregatesFilter<"TeamMember"> | string
    teamId?: StringWithAggregatesFilter<"TeamMember"> | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    domain?: StringNullableFilter<"Site"> | string | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringNullableFilter<"Site"> | string | null
    teamId?: StringNullableFilter<"Site"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    pageViewEvents?: PageViewEventListRelationFilter
    eventDefinitions?: EventDefinitionListRelationFilter
    trackedEvents?: TrackedEventListRelationFilter
    trackedSessions?: TrackedSessionListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    pageViewEvents?: PageViewEventOrderByRelationAggregateInput
    eventDefinitions?: EventDefinitionOrderByRelationAggregateInput
    trackedEvents?: TrackedEventOrderByRelationAggregateInput
    trackedSessions?: TrackedSessionOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringNullableFilter<"Site"> | string | null
    teamId?: StringNullableFilter<"Site"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    pageViewEvents?: PageViewEventListRelationFilter
    eventDefinitions?: EventDefinitionListRelationFilter
    trackedEvents?: TrackedEventListRelationFilter
    trackedSessions?: TrackedSessionListRelationFilter
  }, "id" | "domain">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    domain?: StringNullableWithAggregatesFilter<"Site"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Site"> | string | null
    teamId?: StringNullableWithAggregatesFilter<"Site"> | string | null
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    polarProductId?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    type?: StringFilter<"SubscriptionPlan"> | string
    priceAmount?: IntFilter<"SubscriptionPlan"> | number
    currency?: StringFilter<"SubscriptionPlan"> | string
    interval?: StringNullableFilter<"SubscriptionPlan"> | string | null
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    isArchived?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    benefits?: SubscriptionPlanBenefitListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    polarProductId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    priceAmount?: SortOrder
    currency?: SortOrder
    interval?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    benefits?: SubscriptionPlanBenefitOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    polarProductId?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    name?: StringFilter<"SubscriptionPlan"> | string
    description?: StringNullableFilter<"SubscriptionPlan"> | string | null
    type?: StringFilter<"SubscriptionPlan"> | string
    priceAmount?: IntFilter<"SubscriptionPlan"> | number
    currency?: StringFilter<"SubscriptionPlan"> | string
    interval?: StringNullableFilter<"SubscriptionPlan"> | string | null
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    isArchived?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    benefits?: SubscriptionPlanBenefitListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "polarProductId">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    polarProductId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    priceAmount?: SortOrder
    currency?: SortOrder
    interval?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    polarProductId?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    description?: StringNullableWithAggregatesFilter<"SubscriptionPlan"> | string | null
    type?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    priceAmount?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    currency?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    interval?: StringNullableWithAggregatesFilter<"SubscriptionPlan"> | string | null
    isActive?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
    isArchived?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
  }

  export type SubscriptionPlanBenefitWhereInput = {
    AND?: SubscriptionPlanBenefitWhereInput | SubscriptionPlanBenefitWhereInput[]
    OR?: SubscriptionPlanBenefitWhereInput[]
    NOT?: SubscriptionPlanBenefitWhereInput | SubscriptionPlanBenefitWhereInput[]
    id?: StringFilter<"SubscriptionPlanBenefit"> | string
    planId?: StringFilter<"SubscriptionPlanBenefit"> | string
    name?: StringFilter<"SubscriptionPlanBenefit"> | string
    description?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    type?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    value?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionPlanBenefit"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }

  export type SubscriptionPlanBenefitOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
  }

  export type SubscriptionPlanBenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionPlanBenefitWhereInput | SubscriptionPlanBenefitWhereInput[]
    OR?: SubscriptionPlanBenefitWhereInput[]
    NOT?: SubscriptionPlanBenefitWhereInput | SubscriptionPlanBenefitWhereInput[]
    planId?: StringFilter<"SubscriptionPlanBenefit"> | string
    name?: StringFilter<"SubscriptionPlanBenefit"> | string
    description?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    type?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    value?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionPlanBenefit"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
  }, "id">

  export type SubscriptionPlanBenefitOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SubscriptionPlanBenefitCountOrderByAggregateInput
    _max?: SubscriptionPlanBenefitMaxOrderByAggregateInput
    _min?: SubscriptionPlanBenefitMinOrderByAggregateInput
  }

  export type SubscriptionPlanBenefitScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanBenefitScalarWhereWithAggregatesInput | SubscriptionPlanBenefitScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanBenefitScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanBenefitScalarWhereWithAggregatesInput | SubscriptionPlanBenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlanBenefit"> | string
    planId?: StringWithAggregatesFilter<"SubscriptionPlanBenefit"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlanBenefit"> | string
    description?: StringNullableWithAggregatesFilter<"SubscriptionPlanBenefit"> | string | null
    type?: StringNullableWithAggregatesFilter<"SubscriptionPlanBenefit"> | string | null
    value?: StringNullableWithAggregatesFilter<"SubscriptionPlanBenefit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlanBenefit"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    polarSubscriptionId?: StringFilter<"Subscription"> | string
    polarCustomerId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    planId?: StringFilter<"Subscription"> | string
    teamId?: StringFilter<"Subscription"> | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    polarSubscriptionId?: SortOrder
    polarCustomerId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planId?: SortOrder
    teamId?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    polarSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    polarCustomerId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    planId?: StringFilter<"Subscription"> | string
    teamId?: StringFilter<"Subscription"> | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "polarSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    polarSubscriptionId?: SortOrder
    polarCustomerId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planId?: SortOrder
    teamId?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    polarSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    polarCustomerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    teamId?: StringWithAggregatesFilter<"Subscription"> | string
  }

  export type PageViewEventWhereInput = {
    AND?: PageViewEventWhereInput | PageViewEventWhereInput[]
    OR?: PageViewEventWhereInput[]
    NOT?: PageViewEventWhereInput | PageViewEventWhereInput[]
    id?: StringFilter<"PageViewEvent"> | string
    url?: StringFilter<"PageViewEvent"> | string
    timestamp?: DateTimeFilter<"PageViewEvent"> | Date | string
    createdAt?: DateTimeFilter<"PageViewEvent"> | Date | string
    ip?: StringNullableFilter<"PageViewEvent"> | string | null
    country?: StringNullableFilter<"PageViewEvent"> | string | null
    countryCode?: StringNullableFilter<"PageViewEvent"> | string | null
    region?: StringNullableFilter<"PageViewEvent"> | string | null
    regionName?: StringNullableFilter<"PageViewEvent"> | string | null
    city?: StringNullableFilter<"PageViewEvent"> | string | null
    zip?: StringNullableFilter<"PageViewEvent"> | string | null
    lat?: FloatNullableFilter<"PageViewEvent"> | number | null
    lon?: FloatNullableFilter<"PageViewEvent"> | number | null
    timezone?: StringNullableFilter<"PageViewEvent"> | string | null
    isp?: StringNullableFilter<"PageViewEvent"> | string | null
    mobile?: BoolNullableFilter<"PageViewEvent"> | boolean | null
    userAgent?: StringNullableFilter<"PageViewEvent"> | string | null
    siteId?: StringFilter<"PageViewEvent"> | string
    sessionId?: StringNullableFilter<"PageViewEvent"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    session?: XOR<TrackedSessionNullableScalarRelationFilter, TrackedSessionWhereInput> | null
  }

  export type PageViewEventOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    regionName?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    siteId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    session?: TrackedSessionOrderByWithRelationInput
  }

  export type PageViewEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageViewEventWhereInput | PageViewEventWhereInput[]
    OR?: PageViewEventWhereInput[]
    NOT?: PageViewEventWhereInput | PageViewEventWhereInput[]
    url?: StringFilter<"PageViewEvent"> | string
    timestamp?: DateTimeFilter<"PageViewEvent"> | Date | string
    createdAt?: DateTimeFilter<"PageViewEvent"> | Date | string
    ip?: StringNullableFilter<"PageViewEvent"> | string | null
    country?: StringNullableFilter<"PageViewEvent"> | string | null
    countryCode?: StringNullableFilter<"PageViewEvent"> | string | null
    region?: StringNullableFilter<"PageViewEvent"> | string | null
    regionName?: StringNullableFilter<"PageViewEvent"> | string | null
    city?: StringNullableFilter<"PageViewEvent"> | string | null
    zip?: StringNullableFilter<"PageViewEvent"> | string | null
    lat?: FloatNullableFilter<"PageViewEvent"> | number | null
    lon?: FloatNullableFilter<"PageViewEvent"> | number | null
    timezone?: StringNullableFilter<"PageViewEvent"> | string | null
    isp?: StringNullableFilter<"PageViewEvent"> | string | null
    mobile?: BoolNullableFilter<"PageViewEvent"> | boolean | null
    userAgent?: StringNullableFilter<"PageViewEvent"> | string | null
    siteId?: StringFilter<"PageViewEvent"> | string
    sessionId?: StringNullableFilter<"PageViewEvent"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    session?: XOR<TrackedSessionNullableScalarRelationFilter, TrackedSessionWhereInput> | null
  }, "id">

  export type PageViewEventOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    regionName?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lon?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    siteId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    _count?: PageViewEventCountOrderByAggregateInput
    _avg?: PageViewEventAvgOrderByAggregateInput
    _max?: PageViewEventMaxOrderByAggregateInput
    _min?: PageViewEventMinOrderByAggregateInput
    _sum?: PageViewEventSumOrderByAggregateInput
  }

  export type PageViewEventScalarWhereWithAggregatesInput = {
    AND?: PageViewEventScalarWhereWithAggregatesInput | PageViewEventScalarWhereWithAggregatesInput[]
    OR?: PageViewEventScalarWhereWithAggregatesInput[]
    NOT?: PageViewEventScalarWhereWithAggregatesInput | PageViewEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageViewEvent"> | string
    url?: StringWithAggregatesFilter<"PageViewEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"PageViewEvent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PageViewEvent"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    country?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    countryCode?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    region?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    regionName?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    city?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    zip?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"PageViewEvent"> | number | null
    lon?: FloatNullableWithAggregatesFilter<"PageViewEvent"> | number | null
    timezone?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    isp?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    mobile?: BoolNullableWithAggregatesFilter<"PageViewEvent"> | boolean | null
    userAgent?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
    siteId?: StringWithAggregatesFilter<"PageViewEvent"> | string
    sessionId?: StringNullableWithAggregatesFilter<"PageViewEvent"> | string | null
  }

  export type EventDefinitionWhereInput = {
    AND?: EventDefinitionWhereInput | EventDefinitionWhereInput[]
    OR?: EventDefinitionWhereInput[]
    NOT?: EventDefinitionWhereInput | EventDefinitionWhereInput[]
    id?: StringFilter<"EventDefinition"> | string
    name?: StringFilter<"EventDefinition"> | string
    description?: StringNullableFilter<"EventDefinition"> | string | null
    trackingId?: StringFilter<"EventDefinition"> | string
    createdAt?: DateTimeFilter<"EventDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"EventDefinition"> | Date | string
    siteId?: StringFilter<"EventDefinition"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    trackedEvents?: TrackedEventListRelationFilter
  }

  export type EventDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    trackingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteId?: SortOrder
    site?: SiteOrderByWithRelationInput
    trackedEvents?: TrackedEventOrderByRelationAggregateInput
  }

  export type EventDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siteId_trackingId?: EventDefinitionSiteIdTrackingIdCompoundUniqueInput
    AND?: EventDefinitionWhereInput | EventDefinitionWhereInput[]
    OR?: EventDefinitionWhereInput[]
    NOT?: EventDefinitionWhereInput | EventDefinitionWhereInput[]
    name?: StringFilter<"EventDefinition"> | string
    description?: StringNullableFilter<"EventDefinition"> | string | null
    trackingId?: StringFilter<"EventDefinition"> | string
    createdAt?: DateTimeFilter<"EventDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"EventDefinition"> | Date | string
    siteId?: StringFilter<"EventDefinition"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    trackedEvents?: TrackedEventListRelationFilter
  }, "id" | "siteId_trackingId">

  export type EventDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    trackingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteId?: SortOrder
    _count?: EventDefinitionCountOrderByAggregateInput
    _max?: EventDefinitionMaxOrderByAggregateInput
    _min?: EventDefinitionMinOrderByAggregateInput
  }

  export type EventDefinitionScalarWhereWithAggregatesInput = {
    AND?: EventDefinitionScalarWhereWithAggregatesInput | EventDefinitionScalarWhereWithAggregatesInput[]
    OR?: EventDefinitionScalarWhereWithAggregatesInput[]
    NOT?: EventDefinitionScalarWhereWithAggregatesInput | EventDefinitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventDefinition"> | string
    name?: StringWithAggregatesFilter<"EventDefinition"> | string
    description?: StringNullableWithAggregatesFilter<"EventDefinition"> | string | null
    trackingId?: StringWithAggregatesFilter<"EventDefinition"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventDefinition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventDefinition"> | Date | string
    siteId?: StringWithAggregatesFilter<"EventDefinition"> | string
  }

  export type TrackedEventWhereInput = {
    AND?: TrackedEventWhereInput | TrackedEventWhereInput[]
    OR?: TrackedEventWhereInput[]
    NOT?: TrackedEventWhereInput | TrackedEventWhereInput[]
    id?: StringFilter<"TrackedEvent"> | string
    timestamp?: DateTimeFilter<"TrackedEvent"> | Date | string
    metadata?: JsonNullableFilter<"TrackedEvent">
    createdAt?: DateTimeFilter<"TrackedEvent"> | Date | string
    eventDefinitionId?: StringFilter<"TrackedEvent"> | string
    siteId?: StringFilter<"TrackedEvent"> | string
    eventDefinition?: XOR<EventDefinitionScalarRelationFilter, EventDefinitionWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }

  export type TrackedEventOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventDefinitionId?: SortOrder
    siteId?: SortOrder
    eventDefinition?: EventDefinitionOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
  }

  export type TrackedEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackedEventWhereInput | TrackedEventWhereInput[]
    OR?: TrackedEventWhereInput[]
    NOT?: TrackedEventWhereInput | TrackedEventWhereInput[]
    timestamp?: DateTimeFilter<"TrackedEvent"> | Date | string
    metadata?: JsonNullableFilter<"TrackedEvent">
    createdAt?: DateTimeFilter<"TrackedEvent"> | Date | string
    eventDefinitionId?: StringFilter<"TrackedEvent"> | string
    siteId?: StringFilter<"TrackedEvent"> | string
    eventDefinition?: XOR<EventDefinitionScalarRelationFilter, EventDefinitionWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }, "id">

  export type TrackedEventOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventDefinitionId?: SortOrder
    siteId?: SortOrder
    _count?: TrackedEventCountOrderByAggregateInput
    _max?: TrackedEventMaxOrderByAggregateInput
    _min?: TrackedEventMinOrderByAggregateInput
  }

  export type TrackedEventScalarWhereWithAggregatesInput = {
    AND?: TrackedEventScalarWhereWithAggregatesInput | TrackedEventScalarWhereWithAggregatesInput[]
    OR?: TrackedEventScalarWhereWithAggregatesInput[]
    NOT?: TrackedEventScalarWhereWithAggregatesInput | TrackedEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackedEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"TrackedEvent"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"TrackedEvent">
    createdAt?: DateTimeWithAggregatesFilter<"TrackedEvent"> | Date | string
    eventDefinitionId?: StringWithAggregatesFilter<"TrackedEvent"> | string
    siteId?: StringWithAggregatesFilter<"TrackedEvent"> | string
  }

  export type TrackedSessionWhereInput = {
    AND?: TrackedSessionWhereInput | TrackedSessionWhereInput[]
    OR?: TrackedSessionWhereInput[]
    NOT?: TrackedSessionWhereInput | TrackedSessionWhereInput[]
    id?: StringFilter<"TrackedSession"> | string
    sessionId?: StringFilter<"TrackedSession"> | string
    siteId?: StringFilter<"TrackedSession"> | string
    startedAt?: DateTimeFilter<"TrackedSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TrackedSession"> | Date | string | null
    duration?: IntNullableFilter<"TrackedSession"> | number | null
    didBounce?: BoolFilter<"TrackedSession"> | boolean
    visitorId?: StringNullableFilter<"TrackedSession"> | string | null
    entryPage?: StringFilter<"TrackedSession"> | string
    exitPage?: StringNullableFilter<"TrackedSession"> | string | null
    userAgent?: StringNullableFilter<"TrackedSession"> | string | null
    country?: StringNullableFilter<"TrackedSession"> | string | null
    city?: StringNullableFilter<"TrackedSession"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    pageViewEvents?: PageViewEventListRelationFilter
  }

  export type TrackedSessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    siteId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    didBounce?: SortOrder
    visitorId?: SortOrderInput | SortOrder
    entryPage?: SortOrder
    exitPage?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    pageViewEvents?: PageViewEventOrderByRelationAggregateInput
  }

  export type TrackedSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: TrackedSessionWhereInput | TrackedSessionWhereInput[]
    OR?: TrackedSessionWhereInput[]
    NOT?: TrackedSessionWhereInput | TrackedSessionWhereInput[]
    siteId?: StringFilter<"TrackedSession"> | string
    startedAt?: DateTimeFilter<"TrackedSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TrackedSession"> | Date | string | null
    duration?: IntNullableFilter<"TrackedSession"> | number | null
    didBounce?: BoolFilter<"TrackedSession"> | boolean
    visitorId?: StringNullableFilter<"TrackedSession"> | string | null
    entryPage?: StringFilter<"TrackedSession"> | string
    exitPage?: StringNullableFilter<"TrackedSession"> | string | null
    userAgent?: StringNullableFilter<"TrackedSession"> | string | null
    country?: StringNullableFilter<"TrackedSession"> | string | null
    city?: StringNullableFilter<"TrackedSession"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    pageViewEvents?: PageViewEventListRelationFilter
  }, "id" | "sessionId">

  export type TrackedSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    siteId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    didBounce?: SortOrder
    visitorId?: SortOrderInput | SortOrder
    entryPage?: SortOrder
    exitPage?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    _count?: TrackedSessionCountOrderByAggregateInput
    _avg?: TrackedSessionAvgOrderByAggregateInput
    _max?: TrackedSessionMaxOrderByAggregateInput
    _min?: TrackedSessionMinOrderByAggregateInput
    _sum?: TrackedSessionSumOrderByAggregateInput
  }

  export type TrackedSessionScalarWhereWithAggregatesInput = {
    AND?: TrackedSessionScalarWhereWithAggregatesInput | TrackedSessionScalarWhereWithAggregatesInput[]
    OR?: TrackedSessionScalarWhereWithAggregatesInput[]
    NOT?: TrackedSessionScalarWhereWithAggregatesInput | TrackedSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackedSession"> | string
    sessionId?: StringWithAggregatesFilter<"TrackedSession"> | string
    siteId?: StringWithAggregatesFilter<"TrackedSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"TrackedSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"TrackedSession"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"TrackedSession"> | number | null
    didBounce?: BoolWithAggregatesFilter<"TrackedSession"> | boolean
    visitorId?: StringNullableWithAggregatesFilter<"TrackedSession"> | string | null
    entryPage?: StringWithAggregatesFilter<"TrackedSession"> | string
    exitPage?: StringNullableWithAggregatesFilter<"TrackedSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"TrackedSession"> | string | null
    country?: StringNullableWithAggregatesFilter<"TrackedSession"> | string | null
    city?: StringNullableWithAggregatesFilter<"TrackedSession"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    sites?: SiteCreateNestedManyWithoutTeamInput
    subscriptions?: SubscriptionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    sites?: SiteUncheckedCreateNestedManyWithoutTeamInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    sites?: SiteUpdateManyWithoutTeamNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    sites?: SiteUncheckedUpdateManyWithoutTeamNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamMembershipsInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    userId: string
    teamId: string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamMembershipsNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    userId: string
    teamId: string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSitesInput
    team?: TeamCreateNestedOneWithoutSitesInput
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teamId?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionUncheckedCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSitesNestedInput
    team?: TeamUpdateOneWithoutSitesNestedInput
    pageViewEvents?: PageViewEventUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUncheckedUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teamId?: string | null
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    polarProductId: string
    name: string
    description?: string | null
    type?: string
    priceAmount: number
    currency?: string
    interval?: string | null
    isActive?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SubscriptionPlanBenefitCreateNestedManyWithoutPlanInput
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    polarProductId: string
    name: string
    description?: string | null
    type?: string
    priceAmount: number
    currency?: string
    interval?: string | null
    isActive?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SubscriptionPlanBenefitUncheckedCreateNestedManyWithoutPlanInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SubscriptionPlanBenefitUpdateManyWithoutPlanNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SubscriptionPlanBenefitUncheckedUpdateManyWithoutPlanNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    polarProductId: string
    name: string
    description?: string | null
    type?: string
    priceAmount: number
    currency?: string
    interval?: string | null
    isActive?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanBenefitCreateInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    value?: string | null
    createdAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutBenefitsInput
  }

  export type SubscriptionPlanBenefitUncheckedCreateInput = {
    id?: string
    planId: string
    name: string
    description?: string | null
    type?: string | null
    value?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionPlanBenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutBenefitsNestedInput
  }

  export type SubscriptionPlanBenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanBenefitCreateManyInput = {
    id?: string
    planId: string
    name: string
    description?: string | null
    type?: string | null
    value?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionPlanBenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanBenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
    team: TeamCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    planId: string
    teamId: string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    team?: TeamUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    planId: string
    teamId: string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type PageViewEventCreateInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    site: SiteCreateNestedOneWithoutPageViewEventsInput
    session?: TrackedSessionCreateNestedOneWithoutPageViewEventsInput
  }

  export type PageViewEventUncheckedCreateInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    siteId: string
    sessionId?: string | null
  }

  export type PageViewEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutPageViewEventsNestedInput
    session?: TrackedSessionUpdateOneWithoutPageViewEventsNestedInput
  }

  export type PageViewEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewEventCreateManyInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    siteId: string
    sessionId?: string | null
  }

  export type PageViewEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventDefinitionCreateInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutEventDefinitionsInput
    trackedEvents?: TrackedEventCreateNestedManyWithoutEventDefinitionInput
  }

  export type EventDefinitionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    siteId: string
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutEventDefinitionInput
  }

  export type EventDefinitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutEventDefinitionsNestedInput
    trackedEvents?: TrackedEventUpdateManyWithoutEventDefinitionNestedInput
  }

  export type EventDefinitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: StringFieldUpdateOperationsInput | string
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutEventDefinitionNestedInput
  }

  export type EventDefinitionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    siteId: string
  }

  export type EventDefinitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventDefinitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedEventCreateInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    eventDefinition: EventDefinitionCreateNestedOneWithoutTrackedEventsInput
    site: SiteCreateNestedOneWithoutTrackedEventsInput
  }

  export type TrackedEventUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    eventDefinitionId: string
    siteId: string
  }

  export type TrackedEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDefinition?: EventDefinitionUpdateOneRequiredWithoutTrackedEventsNestedInput
    site?: SiteUpdateOneRequiredWithoutTrackedEventsNestedInput
  }

  export type TrackedEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDefinitionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedEventCreateManyInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    eventDefinitionId: string
    siteId: string
  }

  export type TrackedEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDefinitionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedSessionCreateInput = {
    id?: string
    sessionId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
    site: SiteCreateNestedOneWithoutTrackedSessionsInput
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSessionInput
  }

  export type TrackedSessionUncheckedCreateInput = {
    id?: string
    sessionId: string
    siteId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TrackedSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutTrackedSessionsNestedInput
    pageViewEvents?: PageViewEventUpdateManyWithoutSessionNestedInput
  }

  export type TrackedSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TrackedSessionCreateManyInput = {
    id?: string
    sessionId: string
    siteId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
  }

  export type TrackedSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackedSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    plan?: SortOrder
    polarSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    plan?: SortOrder
    polarSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    plan?: SortOrder
    polarSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMemberUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type PageViewEventListRelationFilter = {
    every?: PageViewEventWhereInput
    some?: PageViewEventWhereInput
    none?: PageViewEventWhereInput
  }

  export type EventDefinitionListRelationFilter = {
    every?: EventDefinitionWhereInput
    some?: EventDefinitionWhereInput
    none?: EventDefinitionWhereInput
  }

  export type TrackedEventListRelationFilter = {
    every?: TrackedEventWhereInput
    some?: TrackedEventWhereInput
    none?: TrackedEventWhereInput
  }

  export type TrackedSessionListRelationFilter = {
    every?: TrackedSessionWhereInput
    some?: TrackedSessionWhereInput
    none?: TrackedSessionWhereInput
  }

  export type PageViewEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventDefinitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackedEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackedSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubscriptionPlanBenefitListRelationFilter = {
    every?: SubscriptionPlanBenefitWhereInput
    some?: SubscriptionPlanBenefitWhereInput
    none?: SubscriptionPlanBenefitWhereInput
  }

  export type SubscriptionPlanBenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    polarProductId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    priceAmount?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    priceAmount?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    polarProductId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    priceAmount?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    polarProductId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    priceAmount?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    priceAmount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanBenefitCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionPlanBenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionPlanBenefitMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    polarSubscriptionId?: SortOrder
    polarCustomerId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planId?: SortOrder
    teamId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    polarSubscriptionId?: SortOrder
    polarCustomerId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planId?: SortOrder
    teamId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    polarSubscriptionId?: SortOrder
    polarCustomerId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planId?: SortOrder
    teamId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type TrackedSessionNullableScalarRelationFilter = {
    is?: TrackedSessionWhereInput | null
    isNot?: TrackedSessionWhereInput | null
  }

  export type PageViewEventCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    region?: SortOrder
    regionName?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    mobile?: SortOrder
    userAgent?: SortOrder
    siteId?: SortOrder
    sessionId?: SortOrder
  }

  export type PageViewEventAvgOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
  }

  export type PageViewEventMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    region?: SortOrder
    regionName?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    mobile?: SortOrder
    userAgent?: SortOrder
    siteId?: SortOrder
    sessionId?: SortOrder
  }

  export type PageViewEventMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    countryCode?: SortOrder
    region?: SortOrder
    regionName?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    mobile?: SortOrder
    userAgent?: SortOrder
    siteId?: SortOrder
    sessionId?: SortOrder
  }

  export type PageViewEventSumOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EventDefinitionSiteIdTrackingIdCompoundUniqueInput = {
    siteId: string
    trackingId: string
  }

  export type EventDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trackingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteId?: SortOrder
  }

  export type EventDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trackingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteId?: SortOrder
  }

  export type EventDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trackingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventDefinitionScalarRelationFilter = {
    is?: EventDefinitionWhereInput
    isNot?: EventDefinitionWhereInput
  }

  export type TrackedEventCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    eventDefinitionId?: SortOrder
    siteId?: SortOrder
  }

  export type TrackedEventMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    eventDefinitionId?: SortOrder
    siteId?: SortOrder
  }

  export type TrackedEventMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    eventDefinitionId?: SortOrder
    siteId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TrackedSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    siteId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    duration?: SortOrder
    didBounce?: SortOrder
    visitorId?: SortOrder
    entryPage?: SortOrder
    exitPage?: SortOrder
    userAgent?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type TrackedSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type TrackedSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    siteId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    duration?: SortOrder
    didBounce?: SortOrder
    visitorId?: SortOrder
    entryPage?: SortOrder
    exitPage?: SortOrder
    userAgent?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type TrackedSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    siteId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    duration?: SortOrder
    didBounce?: SortOrder
    visitorId?: SortOrder
    entryPage?: SortOrder
    exitPage?: SortOrder
    userAgent?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type TrackedSessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type SiteCreateNestedManyWithoutUserInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type SiteUpdateManyWithoutUserNestedInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUserInput | SiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUserInput | SiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUserInput | SiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type SiteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput> | SiteCreateWithoutUserInput[] | SiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUserInput | SiteCreateOrConnectWithoutUserInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUserInput | SiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SiteCreateManyUserInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUserInput | SiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUserInput | SiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type SiteCreateNestedManyWithoutTeamInput = {
    create?: XOR<SiteCreateWithoutTeamInput, SiteUncheckedCreateWithoutTeamInput> | SiteCreateWithoutTeamInput[] | SiteUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutTeamInput | SiteCreateOrConnectWithoutTeamInput[]
    createMany?: SiteCreateManyTeamInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutTeamInput = {
    create?: XOR<SubscriptionCreateWithoutTeamInput, SubscriptionUncheckedCreateWithoutTeamInput> | SubscriptionCreateWithoutTeamInput[] | SubscriptionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTeamInput | SubscriptionCreateOrConnectWithoutTeamInput[]
    createMany?: SubscriptionCreateManyTeamInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<SiteCreateWithoutTeamInput, SiteUncheckedCreateWithoutTeamInput> | SiteCreateWithoutTeamInput[] | SiteUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutTeamInput | SiteCreateOrConnectWithoutTeamInput[]
    createMany?: SiteCreateManyTeamInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<SubscriptionCreateWithoutTeamInput, SubscriptionUncheckedCreateWithoutTeamInput> | SubscriptionCreateWithoutTeamInput[] | SubscriptionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTeamInput | SubscriptionCreateOrConnectWithoutTeamInput[]
    createMany?: SubscriptionCreateManyTeamInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type SiteUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SiteCreateWithoutTeamInput, SiteUncheckedCreateWithoutTeamInput> | SiteCreateWithoutTeamInput[] | SiteUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutTeamInput | SiteCreateOrConnectWithoutTeamInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutTeamInput | SiteUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SiteCreateManyTeamInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutTeamInput | SiteUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutTeamInput | SiteUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTeamInput, SubscriptionUncheckedCreateWithoutTeamInput> | SubscriptionCreateWithoutTeamInput[] | SubscriptionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTeamInput | SubscriptionCreateOrConnectWithoutTeamInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutTeamInput | SubscriptionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SubscriptionCreateManyTeamInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutTeamInput | SubscriptionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutTeamInput | SubscriptionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type SiteUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SiteCreateWithoutTeamInput, SiteUncheckedCreateWithoutTeamInput> | SiteCreateWithoutTeamInput[] | SiteUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutTeamInput | SiteCreateOrConnectWithoutTeamInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutTeamInput | SiteUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SiteCreateManyTeamInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutTeamInput | SiteUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutTeamInput | SiteUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTeamInput, SubscriptionUncheckedCreateWithoutTeamInput> | SubscriptionCreateWithoutTeamInput[] | SubscriptionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTeamInput | SubscriptionCreateOrConnectWithoutTeamInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutTeamInput | SubscriptionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SubscriptionCreateManyTeamInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutTeamInput | SubscriptionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutTeamInput | SubscriptionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamMembershipsInput = {
    create?: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeamMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembershipsInput
    upsert?: UserUpsertWithoutTeamMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMembershipsInput, UserUpdateWithoutTeamMembershipsInput>, UserUncheckedUpdateWithoutTeamMembershipsInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutSitesInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutSitesInput = {
    create?: XOR<TeamCreateWithoutSitesInput, TeamUncheckedCreateWithoutSitesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSitesInput
    connect?: TeamWhereUniqueInput
  }

  export type PageViewEventCreateNestedManyWithoutSiteInput = {
    create?: XOR<PageViewEventCreateWithoutSiteInput, PageViewEventUncheckedCreateWithoutSiteInput> | PageViewEventCreateWithoutSiteInput[] | PageViewEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSiteInput | PageViewEventCreateOrConnectWithoutSiteInput[]
    createMany?: PageViewEventCreateManySiteInputEnvelope
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
  }

  export type EventDefinitionCreateNestedManyWithoutSiteInput = {
    create?: XOR<EventDefinitionCreateWithoutSiteInput, EventDefinitionUncheckedCreateWithoutSiteInput> | EventDefinitionCreateWithoutSiteInput[] | EventDefinitionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EventDefinitionCreateOrConnectWithoutSiteInput | EventDefinitionCreateOrConnectWithoutSiteInput[]
    createMany?: EventDefinitionCreateManySiteInputEnvelope
    connect?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
  }

  export type TrackedEventCreateNestedManyWithoutSiteInput = {
    create?: XOR<TrackedEventCreateWithoutSiteInput, TrackedEventUncheckedCreateWithoutSiteInput> | TrackedEventCreateWithoutSiteInput[] | TrackedEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutSiteInput | TrackedEventCreateOrConnectWithoutSiteInput[]
    createMany?: TrackedEventCreateManySiteInputEnvelope
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
  }

  export type TrackedSessionCreateNestedManyWithoutSiteInput = {
    create?: XOR<TrackedSessionCreateWithoutSiteInput, TrackedSessionUncheckedCreateWithoutSiteInput> | TrackedSessionCreateWithoutSiteInput[] | TrackedSessionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedSessionCreateOrConnectWithoutSiteInput | TrackedSessionCreateOrConnectWithoutSiteInput[]
    createMany?: TrackedSessionCreateManySiteInputEnvelope
    connect?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
  }

  export type PageViewEventUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<PageViewEventCreateWithoutSiteInput, PageViewEventUncheckedCreateWithoutSiteInput> | PageViewEventCreateWithoutSiteInput[] | PageViewEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSiteInput | PageViewEventCreateOrConnectWithoutSiteInput[]
    createMany?: PageViewEventCreateManySiteInputEnvelope
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
  }

  export type EventDefinitionUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<EventDefinitionCreateWithoutSiteInput, EventDefinitionUncheckedCreateWithoutSiteInput> | EventDefinitionCreateWithoutSiteInput[] | EventDefinitionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EventDefinitionCreateOrConnectWithoutSiteInput | EventDefinitionCreateOrConnectWithoutSiteInput[]
    createMany?: EventDefinitionCreateManySiteInputEnvelope
    connect?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
  }

  export type TrackedEventUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<TrackedEventCreateWithoutSiteInput, TrackedEventUncheckedCreateWithoutSiteInput> | TrackedEventCreateWithoutSiteInput[] | TrackedEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutSiteInput | TrackedEventCreateOrConnectWithoutSiteInput[]
    createMany?: TrackedEventCreateManySiteInputEnvelope
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
  }

  export type TrackedSessionUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<TrackedSessionCreateWithoutSiteInput, TrackedSessionUncheckedCreateWithoutSiteInput> | TrackedSessionCreateWithoutSiteInput[] | TrackedSessionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedSessionCreateOrConnectWithoutSiteInput | TrackedSessionCreateOrConnectWithoutSiteInput[]
    createMany?: TrackedSessionCreateManySiteInputEnvelope
    connect?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutSitesNestedInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput
    upsert?: UserUpsertWithoutSitesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSitesInput, UserUpdateWithoutSitesInput>, UserUncheckedUpdateWithoutSitesInput>
  }

  export type TeamUpdateOneWithoutSitesNestedInput = {
    create?: XOR<TeamCreateWithoutSitesInput, TeamUncheckedCreateWithoutSitesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSitesInput
    upsert?: TeamUpsertWithoutSitesInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutSitesInput, TeamUpdateWithoutSitesInput>, TeamUncheckedUpdateWithoutSitesInput>
  }

  export type PageViewEventUpdateManyWithoutSiteNestedInput = {
    create?: XOR<PageViewEventCreateWithoutSiteInput, PageViewEventUncheckedCreateWithoutSiteInput> | PageViewEventCreateWithoutSiteInput[] | PageViewEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSiteInput | PageViewEventCreateOrConnectWithoutSiteInput[]
    upsert?: PageViewEventUpsertWithWhereUniqueWithoutSiteInput | PageViewEventUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: PageViewEventCreateManySiteInputEnvelope
    set?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    disconnect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    delete?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    update?: PageViewEventUpdateWithWhereUniqueWithoutSiteInput | PageViewEventUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: PageViewEventUpdateManyWithWhereWithoutSiteInput | PageViewEventUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: PageViewEventScalarWhereInput | PageViewEventScalarWhereInput[]
  }

  export type EventDefinitionUpdateManyWithoutSiteNestedInput = {
    create?: XOR<EventDefinitionCreateWithoutSiteInput, EventDefinitionUncheckedCreateWithoutSiteInput> | EventDefinitionCreateWithoutSiteInput[] | EventDefinitionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EventDefinitionCreateOrConnectWithoutSiteInput | EventDefinitionCreateOrConnectWithoutSiteInput[]
    upsert?: EventDefinitionUpsertWithWhereUniqueWithoutSiteInput | EventDefinitionUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: EventDefinitionCreateManySiteInputEnvelope
    set?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    disconnect?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    delete?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    connect?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    update?: EventDefinitionUpdateWithWhereUniqueWithoutSiteInput | EventDefinitionUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: EventDefinitionUpdateManyWithWhereWithoutSiteInput | EventDefinitionUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: EventDefinitionScalarWhereInput | EventDefinitionScalarWhereInput[]
  }

  export type TrackedEventUpdateManyWithoutSiteNestedInput = {
    create?: XOR<TrackedEventCreateWithoutSiteInput, TrackedEventUncheckedCreateWithoutSiteInput> | TrackedEventCreateWithoutSiteInput[] | TrackedEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutSiteInput | TrackedEventCreateOrConnectWithoutSiteInput[]
    upsert?: TrackedEventUpsertWithWhereUniqueWithoutSiteInput | TrackedEventUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: TrackedEventCreateManySiteInputEnvelope
    set?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    disconnect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    delete?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    update?: TrackedEventUpdateWithWhereUniqueWithoutSiteInput | TrackedEventUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: TrackedEventUpdateManyWithWhereWithoutSiteInput | TrackedEventUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: TrackedEventScalarWhereInput | TrackedEventScalarWhereInput[]
  }

  export type TrackedSessionUpdateManyWithoutSiteNestedInput = {
    create?: XOR<TrackedSessionCreateWithoutSiteInput, TrackedSessionUncheckedCreateWithoutSiteInput> | TrackedSessionCreateWithoutSiteInput[] | TrackedSessionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedSessionCreateOrConnectWithoutSiteInput | TrackedSessionCreateOrConnectWithoutSiteInput[]
    upsert?: TrackedSessionUpsertWithWhereUniqueWithoutSiteInput | TrackedSessionUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: TrackedSessionCreateManySiteInputEnvelope
    set?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    disconnect?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    delete?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    connect?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    update?: TrackedSessionUpdateWithWhereUniqueWithoutSiteInput | TrackedSessionUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: TrackedSessionUpdateManyWithWhereWithoutSiteInput | TrackedSessionUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: TrackedSessionScalarWhereInput | TrackedSessionScalarWhereInput[]
  }

  export type PageViewEventUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<PageViewEventCreateWithoutSiteInput, PageViewEventUncheckedCreateWithoutSiteInput> | PageViewEventCreateWithoutSiteInput[] | PageViewEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSiteInput | PageViewEventCreateOrConnectWithoutSiteInput[]
    upsert?: PageViewEventUpsertWithWhereUniqueWithoutSiteInput | PageViewEventUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: PageViewEventCreateManySiteInputEnvelope
    set?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    disconnect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    delete?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    update?: PageViewEventUpdateWithWhereUniqueWithoutSiteInput | PageViewEventUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: PageViewEventUpdateManyWithWhereWithoutSiteInput | PageViewEventUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: PageViewEventScalarWhereInput | PageViewEventScalarWhereInput[]
  }

  export type EventDefinitionUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<EventDefinitionCreateWithoutSiteInput, EventDefinitionUncheckedCreateWithoutSiteInput> | EventDefinitionCreateWithoutSiteInput[] | EventDefinitionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EventDefinitionCreateOrConnectWithoutSiteInput | EventDefinitionCreateOrConnectWithoutSiteInput[]
    upsert?: EventDefinitionUpsertWithWhereUniqueWithoutSiteInput | EventDefinitionUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: EventDefinitionCreateManySiteInputEnvelope
    set?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    disconnect?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    delete?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    connect?: EventDefinitionWhereUniqueInput | EventDefinitionWhereUniqueInput[]
    update?: EventDefinitionUpdateWithWhereUniqueWithoutSiteInput | EventDefinitionUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: EventDefinitionUpdateManyWithWhereWithoutSiteInput | EventDefinitionUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: EventDefinitionScalarWhereInput | EventDefinitionScalarWhereInput[]
  }

  export type TrackedEventUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<TrackedEventCreateWithoutSiteInput, TrackedEventUncheckedCreateWithoutSiteInput> | TrackedEventCreateWithoutSiteInput[] | TrackedEventUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutSiteInput | TrackedEventCreateOrConnectWithoutSiteInput[]
    upsert?: TrackedEventUpsertWithWhereUniqueWithoutSiteInput | TrackedEventUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: TrackedEventCreateManySiteInputEnvelope
    set?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    disconnect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    delete?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    update?: TrackedEventUpdateWithWhereUniqueWithoutSiteInput | TrackedEventUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: TrackedEventUpdateManyWithWhereWithoutSiteInput | TrackedEventUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: TrackedEventScalarWhereInput | TrackedEventScalarWhereInput[]
  }

  export type TrackedSessionUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<TrackedSessionCreateWithoutSiteInput, TrackedSessionUncheckedCreateWithoutSiteInput> | TrackedSessionCreateWithoutSiteInput[] | TrackedSessionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TrackedSessionCreateOrConnectWithoutSiteInput | TrackedSessionCreateOrConnectWithoutSiteInput[]
    upsert?: TrackedSessionUpsertWithWhereUniqueWithoutSiteInput | TrackedSessionUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: TrackedSessionCreateManySiteInputEnvelope
    set?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    disconnect?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    delete?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    connect?: TrackedSessionWhereUniqueInput | TrackedSessionWhereUniqueInput[]
    update?: TrackedSessionUpdateWithWhereUniqueWithoutSiteInput | TrackedSessionUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: TrackedSessionUpdateManyWithWhereWithoutSiteInput | TrackedSessionUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: TrackedSessionScalarWhereInput | TrackedSessionScalarWhereInput[]
  }

  export type SubscriptionPlanBenefitCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionPlanBenefitCreateWithoutPlanInput, SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput> | SubscriptionPlanBenefitCreateWithoutPlanInput[] | SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput | SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionPlanBenefitCreateManyPlanInputEnvelope
    connect?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionPlanBenefitUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionPlanBenefitCreateWithoutPlanInput, SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput> | SubscriptionPlanBenefitCreateWithoutPlanInput[] | SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput | SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionPlanBenefitCreateManyPlanInputEnvelope
    connect?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubscriptionPlanBenefitUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionPlanBenefitCreateWithoutPlanInput, SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput> | SubscriptionPlanBenefitCreateWithoutPlanInput[] | SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput | SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionPlanBenefitUpsertWithWhereUniqueWithoutPlanInput | SubscriptionPlanBenefitUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionPlanBenefitCreateManyPlanInputEnvelope
    set?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    disconnect?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    delete?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    connect?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    update?: SubscriptionPlanBenefitUpdateWithWhereUniqueWithoutPlanInput | SubscriptionPlanBenefitUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionPlanBenefitUpdateManyWithWhereWithoutPlanInput | SubscriptionPlanBenefitUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionPlanBenefitScalarWhereInput | SubscriptionPlanBenefitScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionPlanBenefitUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionPlanBenefitCreateWithoutPlanInput, SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput> | SubscriptionPlanBenefitCreateWithoutPlanInput[] | SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput | SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionPlanBenefitUpsertWithWhereUniqueWithoutPlanInput | SubscriptionPlanBenefitUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionPlanBenefitCreateManyPlanInputEnvelope
    set?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    disconnect?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    delete?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    connect?: SubscriptionPlanBenefitWhereUniqueInput | SubscriptionPlanBenefitWhereUniqueInput[]
    update?: SubscriptionPlanBenefitUpdateWithWhereUniqueWithoutPlanInput | SubscriptionPlanBenefitUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionPlanBenefitUpdateManyWithWhereWithoutPlanInput | SubscriptionPlanBenefitUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionPlanBenefitScalarWhereInput | SubscriptionPlanBenefitScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionPlanCreateNestedOneWithoutBenefitsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutBenefitsInput, SubscriptionPlanUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutBenefitsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutBenefitsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutBenefitsInput, SubscriptionPlanUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutBenefitsInput
    upsert?: SubscriptionPlanUpsertWithoutBenefitsInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutBenefitsInput, SubscriptionPlanUpdateWithoutBenefitsInput>, SubscriptionPlanUncheckedUpdateWithoutBenefitsInput>
  }

  export type SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<TeamCreateWithoutSubscriptionsInput, TeamUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSubscriptionsInput
    connect?: TeamWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: SubscriptionPlanUpsertWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput, SubscriptionPlanUpdateWithoutSubscriptionsInput>, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type TeamUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<TeamCreateWithoutSubscriptionsInput, TeamUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSubscriptionsInput
    upsert?: TeamUpsertWithoutSubscriptionsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutSubscriptionsInput, TeamUpdateWithoutSubscriptionsInput>, TeamUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SiteCreateNestedOneWithoutPageViewEventsInput = {
    create?: XOR<SiteCreateWithoutPageViewEventsInput, SiteUncheckedCreateWithoutPageViewEventsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutPageViewEventsInput
    connect?: SiteWhereUniqueInput
  }

  export type TrackedSessionCreateNestedOneWithoutPageViewEventsInput = {
    create?: XOR<TrackedSessionCreateWithoutPageViewEventsInput, TrackedSessionUncheckedCreateWithoutPageViewEventsInput>
    connectOrCreate?: TrackedSessionCreateOrConnectWithoutPageViewEventsInput
    connect?: TrackedSessionWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SiteUpdateOneRequiredWithoutPageViewEventsNestedInput = {
    create?: XOR<SiteCreateWithoutPageViewEventsInput, SiteUncheckedCreateWithoutPageViewEventsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutPageViewEventsInput
    upsert?: SiteUpsertWithoutPageViewEventsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutPageViewEventsInput, SiteUpdateWithoutPageViewEventsInput>, SiteUncheckedUpdateWithoutPageViewEventsInput>
  }

  export type TrackedSessionUpdateOneWithoutPageViewEventsNestedInput = {
    create?: XOR<TrackedSessionCreateWithoutPageViewEventsInput, TrackedSessionUncheckedCreateWithoutPageViewEventsInput>
    connectOrCreate?: TrackedSessionCreateOrConnectWithoutPageViewEventsInput
    upsert?: TrackedSessionUpsertWithoutPageViewEventsInput
    disconnect?: TrackedSessionWhereInput | boolean
    delete?: TrackedSessionWhereInput | boolean
    connect?: TrackedSessionWhereUniqueInput
    update?: XOR<XOR<TrackedSessionUpdateToOneWithWhereWithoutPageViewEventsInput, TrackedSessionUpdateWithoutPageViewEventsInput>, TrackedSessionUncheckedUpdateWithoutPageViewEventsInput>
  }

  export type SiteCreateNestedOneWithoutEventDefinitionsInput = {
    create?: XOR<SiteCreateWithoutEventDefinitionsInput, SiteUncheckedCreateWithoutEventDefinitionsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutEventDefinitionsInput
    connect?: SiteWhereUniqueInput
  }

  export type TrackedEventCreateNestedManyWithoutEventDefinitionInput = {
    create?: XOR<TrackedEventCreateWithoutEventDefinitionInput, TrackedEventUncheckedCreateWithoutEventDefinitionInput> | TrackedEventCreateWithoutEventDefinitionInput[] | TrackedEventUncheckedCreateWithoutEventDefinitionInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutEventDefinitionInput | TrackedEventCreateOrConnectWithoutEventDefinitionInput[]
    createMany?: TrackedEventCreateManyEventDefinitionInputEnvelope
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
  }

  export type TrackedEventUncheckedCreateNestedManyWithoutEventDefinitionInput = {
    create?: XOR<TrackedEventCreateWithoutEventDefinitionInput, TrackedEventUncheckedCreateWithoutEventDefinitionInput> | TrackedEventCreateWithoutEventDefinitionInput[] | TrackedEventUncheckedCreateWithoutEventDefinitionInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutEventDefinitionInput | TrackedEventCreateOrConnectWithoutEventDefinitionInput[]
    createMany?: TrackedEventCreateManyEventDefinitionInputEnvelope
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
  }

  export type SiteUpdateOneRequiredWithoutEventDefinitionsNestedInput = {
    create?: XOR<SiteCreateWithoutEventDefinitionsInput, SiteUncheckedCreateWithoutEventDefinitionsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutEventDefinitionsInput
    upsert?: SiteUpsertWithoutEventDefinitionsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutEventDefinitionsInput, SiteUpdateWithoutEventDefinitionsInput>, SiteUncheckedUpdateWithoutEventDefinitionsInput>
  }

  export type TrackedEventUpdateManyWithoutEventDefinitionNestedInput = {
    create?: XOR<TrackedEventCreateWithoutEventDefinitionInput, TrackedEventUncheckedCreateWithoutEventDefinitionInput> | TrackedEventCreateWithoutEventDefinitionInput[] | TrackedEventUncheckedCreateWithoutEventDefinitionInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutEventDefinitionInput | TrackedEventCreateOrConnectWithoutEventDefinitionInput[]
    upsert?: TrackedEventUpsertWithWhereUniqueWithoutEventDefinitionInput | TrackedEventUpsertWithWhereUniqueWithoutEventDefinitionInput[]
    createMany?: TrackedEventCreateManyEventDefinitionInputEnvelope
    set?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    disconnect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    delete?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    update?: TrackedEventUpdateWithWhereUniqueWithoutEventDefinitionInput | TrackedEventUpdateWithWhereUniqueWithoutEventDefinitionInput[]
    updateMany?: TrackedEventUpdateManyWithWhereWithoutEventDefinitionInput | TrackedEventUpdateManyWithWhereWithoutEventDefinitionInput[]
    deleteMany?: TrackedEventScalarWhereInput | TrackedEventScalarWhereInput[]
  }

  export type TrackedEventUncheckedUpdateManyWithoutEventDefinitionNestedInput = {
    create?: XOR<TrackedEventCreateWithoutEventDefinitionInput, TrackedEventUncheckedCreateWithoutEventDefinitionInput> | TrackedEventCreateWithoutEventDefinitionInput[] | TrackedEventUncheckedCreateWithoutEventDefinitionInput[]
    connectOrCreate?: TrackedEventCreateOrConnectWithoutEventDefinitionInput | TrackedEventCreateOrConnectWithoutEventDefinitionInput[]
    upsert?: TrackedEventUpsertWithWhereUniqueWithoutEventDefinitionInput | TrackedEventUpsertWithWhereUniqueWithoutEventDefinitionInput[]
    createMany?: TrackedEventCreateManyEventDefinitionInputEnvelope
    set?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    disconnect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    delete?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    connect?: TrackedEventWhereUniqueInput | TrackedEventWhereUniqueInput[]
    update?: TrackedEventUpdateWithWhereUniqueWithoutEventDefinitionInput | TrackedEventUpdateWithWhereUniqueWithoutEventDefinitionInput[]
    updateMany?: TrackedEventUpdateManyWithWhereWithoutEventDefinitionInput | TrackedEventUpdateManyWithWhereWithoutEventDefinitionInput[]
    deleteMany?: TrackedEventScalarWhereInput | TrackedEventScalarWhereInput[]
  }

  export type EventDefinitionCreateNestedOneWithoutTrackedEventsInput = {
    create?: XOR<EventDefinitionCreateWithoutTrackedEventsInput, EventDefinitionUncheckedCreateWithoutTrackedEventsInput>
    connectOrCreate?: EventDefinitionCreateOrConnectWithoutTrackedEventsInput
    connect?: EventDefinitionWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutTrackedEventsInput = {
    create?: XOR<SiteCreateWithoutTrackedEventsInput, SiteUncheckedCreateWithoutTrackedEventsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutTrackedEventsInput
    connect?: SiteWhereUniqueInput
  }

  export type EventDefinitionUpdateOneRequiredWithoutTrackedEventsNestedInput = {
    create?: XOR<EventDefinitionCreateWithoutTrackedEventsInput, EventDefinitionUncheckedCreateWithoutTrackedEventsInput>
    connectOrCreate?: EventDefinitionCreateOrConnectWithoutTrackedEventsInput
    upsert?: EventDefinitionUpsertWithoutTrackedEventsInput
    connect?: EventDefinitionWhereUniqueInput
    update?: XOR<XOR<EventDefinitionUpdateToOneWithWhereWithoutTrackedEventsInput, EventDefinitionUpdateWithoutTrackedEventsInput>, EventDefinitionUncheckedUpdateWithoutTrackedEventsInput>
  }

  export type SiteUpdateOneRequiredWithoutTrackedEventsNestedInput = {
    create?: XOR<SiteCreateWithoutTrackedEventsInput, SiteUncheckedCreateWithoutTrackedEventsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutTrackedEventsInput
    upsert?: SiteUpsertWithoutTrackedEventsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutTrackedEventsInput, SiteUpdateWithoutTrackedEventsInput>, SiteUncheckedUpdateWithoutTrackedEventsInput>
  }

  export type SiteCreateNestedOneWithoutTrackedSessionsInput = {
    create?: XOR<SiteCreateWithoutTrackedSessionsInput, SiteUncheckedCreateWithoutTrackedSessionsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutTrackedSessionsInput
    connect?: SiteWhereUniqueInput
  }

  export type PageViewEventCreateNestedManyWithoutSessionInput = {
    create?: XOR<PageViewEventCreateWithoutSessionInput, PageViewEventUncheckedCreateWithoutSessionInput> | PageViewEventCreateWithoutSessionInput[] | PageViewEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSessionInput | PageViewEventCreateOrConnectWithoutSessionInput[]
    createMany?: PageViewEventCreateManySessionInputEnvelope
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
  }

  export type PageViewEventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<PageViewEventCreateWithoutSessionInput, PageViewEventUncheckedCreateWithoutSessionInput> | PageViewEventCreateWithoutSessionInput[] | PageViewEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSessionInput | PageViewEventCreateOrConnectWithoutSessionInput[]
    createMany?: PageViewEventCreateManySessionInputEnvelope
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
  }

  export type SiteUpdateOneRequiredWithoutTrackedSessionsNestedInput = {
    create?: XOR<SiteCreateWithoutTrackedSessionsInput, SiteUncheckedCreateWithoutTrackedSessionsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutTrackedSessionsInput
    upsert?: SiteUpsertWithoutTrackedSessionsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutTrackedSessionsInput, SiteUpdateWithoutTrackedSessionsInput>, SiteUncheckedUpdateWithoutTrackedSessionsInput>
  }

  export type PageViewEventUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PageViewEventCreateWithoutSessionInput, PageViewEventUncheckedCreateWithoutSessionInput> | PageViewEventCreateWithoutSessionInput[] | PageViewEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSessionInput | PageViewEventCreateOrConnectWithoutSessionInput[]
    upsert?: PageViewEventUpsertWithWhereUniqueWithoutSessionInput | PageViewEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PageViewEventCreateManySessionInputEnvelope
    set?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    disconnect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    delete?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    update?: PageViewEventUpdateWithWhereUniqueWithoutSessionInput | PageViewEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PageViewEventUpdateManyWithWhereWithoutSessionInput | PageViewEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PageViewEventScalarWhereInput | PageViewEventScalarWhereInput[]
  }

  export type PageViewEventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PageViewEventCreateWithoutSessionInput, PageViewEventUncheckedCreateWithoutSessionInput> | PageViewEventCreateWithoutSessionInput[] | PageViewEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PageViewEventCreateOrConnectWithoutSessionInput | PageViewEventCreateOrConnectWithoutSessionInput[]
    upsert?: PageViewEventUpsertWithWhereUniqueWithoutSessionInput | PageViewEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PageViewEventCreateManySessionInputEnvelope
    set?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    disconnect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    delete?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    connect?: PageViewEventWhereUniqueInput | PageViewEventWhereUniqueInput[]
    update?: PageViewEventUpdateWithWhereUniqueWithoutSessionInput | PageViewEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PageViewEventUpdateManyWithWhereWithoutSessionInput | PageViewEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PageViewEventScalarWhereInput | PageViewEventScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutUserInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    teamId: string
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SiteCreateWithoutUserInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutSitesInput
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionUncheckedCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutUserInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput>
  }

  export type SiteCreateManyUserInputEnvelope = {
    data: SiteCreateManyUserInput | SiteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
  }

  export type SiteUpsertWithWhereUniqueWithoutUserInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutUserInput, SiteUncheckedUpdateWithoutUserInput>
    create: XOR<SiteCreateWithoutUserInput, SiteUncheckedCreateWithoutUserInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutUserInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutUserInput, SiteUncheckedUpdateWithoutUserInput>
  }

  export type SiteUpdateManyWithWhereWithoutUserInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutUserInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    domain?: StringNullableFilter<"Site"> | string | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringNullableFilter<"Site"> | string | null
    teamId?: StringNullableFilter<"Site"> | string | null
  }

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamMembershipsInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    userId: string
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type SiteCreateWithoutTeamInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSitesInput
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionUncheckedCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutTeamInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutTeamInput, SiteUncheckedCreateWithoutTeamInput>
  }

  export type SiteCreateManyTeamInputEnvelope = {
    data: SiteCreateManyTeamInput | SiteCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutTeamInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutTeamInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    planId: string
  }

  export type SubscriptionCreateOrConnectWithoutTeamInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutTeamInput, SubscriptionUncheckedCreateWithoutTeamInput>
  }

  export type SubscriptionCreateManyTeamInputEnvelope = {
    data: SubscriptionCreateManyTeamInput | SubscriptionCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type SiteUpsertWithWhereUniqueWithoutTeamInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutTeamInput, SiteUncheckedUpdateWithoutTeamInput>
    create: XOR<SiteCreateWithoutTeamInput, SiteUncheckedCreateWithoutTeamInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutTeamInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutTeamInput, SiteUncheckedUpdateWithoutTeamInput>
  }

  export type SiteUpdateManyWithWhereWithoutTeamInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutTeamInput>
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutTeamInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutTeamInput, SubscriptionUncheckedUpdateWithoutTeamInput>
    create: XOR<SubscriptionCreateWithoutTeamInput, SubscriptionUncheckedCreateWithoutTeamInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutTeamInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutTeamInput, SubscriptionUncheckedUpdateWithoutTeamInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutTeamInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutTeamInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    polarSubscriptionId?: StringFilter<"Subscription"> | string
    polarCustomerId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    planId?: StringFilter<"Subscription"> | string
    teamId?: StringFilter<"Subscription"> | string
  }

  export type UserCreateWithoutTeamMembershipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamMembershipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sites?: SiteCreateNestedManyWithoutTeamInput
    subscriptions?: SubscriptionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sites?: SiteUncheckedCreateNestedManyWithoutTeamInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutTeamMembershipsInput = {
    update: XOR<UserUpdateWithoutTeamMembershipsInput, UserUncheckedUpdateWithoutTeamMembershipsInput>
    create: XOR<UserCreateWithoutTeamMembershipsInput, UserUncheckedCreateWithoutTeamMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMembershipsInput, UserUncheckedUpdateWithoutTeamMembershipsInput>
  }

  export type UserUpdateWithoutTeamMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUpdateManyWithoutTeamNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUncheckedUpdateManyWithoutTeamNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutSitesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSitesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    teamMemberships?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
  }

  export type TeamCreateWithoutSitesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    subscriptions?: SubscriptionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutSitesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutSitesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSitesInput, TeamUncheckedCreateWithoutSitesInput>
  }

  export type PageViewEventCreateWithoutSiteInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    session?: TrackedSessionCreateNestedOneWithoutPageViewEventsInput
  }

  export type PageViewEventUncheckedCreateWithoutSiteInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    sessionId?: string | null
  }

  export type PageViewEventCreateOrConnectWithoutSiteInput = {
    where: PageViewEventWhereUniqueInput
    create: XOR<PageViewEventCreateWithoutSiteInput, PageViewEventUncheckedCreateWithoutSiteInput>
  }

  export type PageViewEventCreateManySiteInputEnvelope = {
    data: PageViewEventCreateManySiteInput | PageViewEventCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type EventDefinitionCreateWithoutSiteInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackedEvents?: TrackedEventCreateNestedManyWithoutEventDefinitionInput
  }

  export type EventDefinitionUncheckedCreateWithoutSiteInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutEventDefinitionInput
  }

  export type EventDefinitionCreateOrConnectWithoutSiteInput = {
    where: EventDefinitionWhereUniqueInput
    create: XOR<EventDefinitionCreateWithoutSiteInput, EventDefinitionUncheckedCreateWithoutSiteInput>
  }

  export type EventDefinitionCreateManySiteInputEnvelope = {
    data: EventDefinitionCreateManySiteInput | EventDefinitionCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type TrackedEventCreateWithoutSiteInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    eventDefinition: EventDefinitionCreateNestedOneWithoutTrackedEventsInput
  }

  export type TrackedEventUncheckedCreateWithoutSiteInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    eventDefinitionId: string
  }

  export type TrackedEventCreateOrConnectWithoutSiteInput = {
    where: TrackedEventWhereUniqueInput
    create: XOR<TrackedEventCreateWithoutSiteInput, TrackedEventUncheckedCreateWithoutSiteInput>
  }

  export type TrackedEventCreateManySiteInputEnvelope = {
    data: TrackedEventCreateManySiteInput | TrackedEventCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type TrackedSessionCreateWithoutSiteInput = {
    id?: string
    sessionId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSessionInput
  }

  export type TrackedSessionUncheckedCreateWithoutSiteInput = {
    id?: string
    sessionId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type TrackedSessionCreateOrConnectWithoutSiteInput = {
    where: TrackedSessionWhereUniqueInput
    create: XOR<TrackedSessionCreateWithoutSiteInput, TrackedSessionUncheckedCreateWithoutSiteInput>
  }

  export type TrackedSessionCreateManySiteInputEnvelope = {
    data: TrackedSessionCreateManySiteInput | TrackedSessionCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSitesInput = {
    update: XOR<UserUpdateWithoutSitesInput, UserUncheckedUpdateWithoutSitesInput>
    create: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSitesInput, UserUncheckedUpdateWithoutSitesInput>
  }

  export type UserUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    teamMemberships?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutSitesInput = {
    update: XOR<TeamUpdateWithoutSitesInput, TeamUncheckedUpdateWithoutSitesInput>
    create: XOR<TeamCreateWithoutSitesInput, TeamUncheckedCreateWithoutSitesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutSitesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutSitesInput, TeamUncheckedUpdateWithoutSitesInput>
  }

  export type TeamUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PageViewEventUpsertWithWhereUniqueWithoutSiteInput = {
    where: PageViewEventWhereUniqueInput
    update: XOR<PageViewEventUpdateWithoutSiteInput, PageViewEventUncheckedUpdateWithoutSiteInput>
    create: XOR<PageViewEventCreateWithoutSiteInput, PageViewEventUncheckedCreateWithoutSiteInput>
  }

  export type PageViewEventUpdateWithWhereUniqueWithoutSiteInput = {
    where: PageViewEventWhereUniqueInput
    data: XOR<PageViewEventUpdateWithoutSiteInput, PageViewEventUncheckedUpdateWithoutSiteInput>
  }

  export type PageViewEventUpdateManyWithWhereWithoutSiteInput = {
    where: PageViewEventScalarWhereInput
    data: XOR<PageViewEventUpdateManyMutationInput, PageViewEventUncheckedUpdateManyWithoutSiteInput>
  }

  export type PageViewEventScalarWhereInput = {
    AND?: PageViewEventScalarWhereInput | PageViewEventScalarWhereInput[]
    OR?: PageViewEventScalarWhereInput[]
    NOT?: PageViewEventScalarWhereInput | PageViewEventScalarWhereInput[]
    id?: StringFilter<"PageViewEvent"> | string
    url?: StringFilter<"PageViewEvent"> | string
    timestamp?: DateTimeFilter<"PageViewEvent"> | Date | string
    createdAt?: DateTimeFilter<"PageViewEvent"> | Date | string
    ip?: StringNullableFilter<"PageViewEvent"> | string | null
    country?: StringNullableFilter<"PageViewEvent"> | string | null
    countryCode?: StringNullableFilter<"PageViewEvent"> | string | null
    region?: StringNullableFilter<"PageViewEvent"> | string | null
    regionName?: StringNullableFilter<"PageViewEvent"> | string | null
    city?: StringNullableFilter<"PageViewEvent"> | string | null
    zip?: StringNullableFilter<"PageViewEvent"> | string | null
    lat?: FloatNullableFilter<"PageViewEvent"> | number | null
    lon?: FloatNullableFilter<"PageViewEvent"> | number | null
    timezone?: StringNullableFilter<"PageViewEvent"> | string | null
    isp?: StringNullableFilter<"PageViewEvent"> | string | null
    mobile?: BoolNullableFilter<"PageViewEvent"> | boolean | null
    userAgent?: StringNullableFilter<"PageViewEvent"> | string | null
    siteId?: StringFilter<"PageViewEvent"> | string
    sessionId?: StringNullableFilter<"PageViewEvent"> | string | null
  }

  export type EventDefinitionUpsertWithWhereUniqueWithoutSiteInput = {
    where: EventDefinitionWhereUniqueInput
    update: XOR<EventDefinitionUpdateWithoutSiteInput, EventDefinitionUncheckedUpdateWithoutSiteInput>
    create: XOR<EventDefinitionCreateWithoutSiteInput, EventDefinitionUncheckedCreateWithoutSiteInput>
  }

  export type EventDefinitionUpdateWithWhereUniqueWithoutSiteInput = {
    where: EventDefinitionWhereUniqueInput
    data: XOR<EventDefinitionUpdateWithoutSiteInput, EventDefinitionUncheckedUpdateWithoutSiteInput>
  }

  export type EventDefinitionUpdateManyWithWhereWithoutSiteInput = {
    where: EventDefinitionScalarWhereInput
    data: XOR<EventDefinitionUpdateManyMutationInput, EventDefinitionUncheckedUpdateManyWithoutSiteInput>
  }

  export type EventDefinitionScalarWhereInput = {
    AND?: EventDefinitionScalarWhereInput | EventDefinitionScalarWhereInput[]
    OR?: EventDefinitionScalarWhereInput[]
    NOT?: EventDefinitionScalarWhereInput | EventDefinitionScalarWhereInput[]
    id?: StringFilter<"EventDefinition"> | string
    name?: StringFilter<"EventDefinition"> | string
    description?: StringNullableFilter<"EventDefinition"> | string | null
    trackingId?: StringFilter<"EventDefinition"> | string
    createdAt?: DateTimeFilter<"EventDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"EventDefinition"> | Date | string
    siteId?: StringFilter<"EventDefinition"> | string
  }

  export type TrackedEventUpsertWithWhereUniqueWithoutSiteInput = {
    where: TrackedEventWhereUniqueInput
    update: XOR<TrackedEventUpdateWithoutSiteInput, TrackedEventUncheckedUpdateWithoutSiteInput>
    create: XOR<TrackedEventCreateWithoutSiteInput, TrackedEventUncheckedCreateWithoutSiteInput>
  }

  export type TrackedEventUpdateWithWhereUniqueWithoutSiteInput = {
    where: TrackedEventWhereUniqueInput
    data: XOR<TrackedEventUpdateWithoutSiteInput, TrackedEventUncheckedUpdateWithoutSiteInput>
  }

  export type TrackedEventUpdateManyWithWhereWithoutSiteInput = {
    where: TrackedEventScalarWhereInput
    data: XOR<TrackedEventUpdateManyMutationInput, TrackedEventUncheckedUpdateManyWithoutSiteInput>
  }

  export type TrackedEventScalarWhereInput = {
    AND?: TrackedEventScalarWhereInput | TrackedEventScalarWhereInput[]
    OR?: TrackedEventScalarWhereInput[]
    NOT?: TrackedEventScalarWhereInput | TrackedEventScalarWhereInput[]
    id?: StringFilter<"TrackedEvent"> | string
    timestamp?: DateTimeFilter<"TrackedEvent"> | Date | string
    metadata?: JsonNullableFilter<"TrackedEvent">
    createdAt?: DateTimeFilter<"TrackedEvent"> | Date | string
    eventDefinitionId?: StringFilter<"TrackedEvent"> | string
    siteId?: StringFilter<"TrackedEvent"> | string
  }

  export type TrackedSessionUpsertWithWhereUniqueWithoutSiteInput = {
    where: TrackedSessionWhereUniqueInput
    update: XOR<TrackedSessionUpdateWithoutSiteInput, TrackedSessionUncheckedUpdateWithoutSiteInput>
    create: XOR<TrackedSessionCreateWithoutSiteInput, TrackedSessionUncheckedCreateWithoutSiteInput>
  }

  export type TrackedSessionUpdateWithWhereUniqueWithoutSiteInput = {
    where: TrackedSessionWhereUniqueInput
    data: XOR<TrackedSessionUpdateWithoutSiteInput, TrackedSessionUncheckedUpdateWithoutSiteInput>
  }

  export type TrackedSessionUpdateManyWithWhereWithoutSiteInput = {
    where: TrackedSessionScalarWhereInput
    data: XOR<TrackedSessionUpdateManyMutationInput, TrackedSessionUncheckedUpdateManyWithoutSiteInput>
  }

  export type TrackedSessionScalarWhereInput = {
    AND?: TrackedSessionScalarWhereInput | TrackedSessionScalarWhereInput[]
    OR?: TrackedSessionScalarWhereInput[]
    NOT?: TrackedSessionScalarWhereInput | TrackedSessionScalarWhereInput[]
    id?: StringFilter<"TrackedSession"> | string
    sessionId?: StringFilter<"TrackedSession"> | string
    siteId?: StringFilter<"TrackedSession"> | string
    startedAt?: DateTimeFilter<"TrackedSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"TrackedSession"> | Date | string | null
    duration?: IntNullableFilter<"TrackedSession"> | number | null
    didBounce?: BoolFilter<"TrackedSession"> | boolean
    visitorId?: StringNullableFilter<"TrackedSession"> | string | null
    entryPage?: StringFilter<"TrackedSession"> | string
    exitPage?: StringNullableFilter<"TrackedSession"> | string | null
    userAgent?: StringNullableFilter<"TrackedSession"> | string | null
    country?: StringNullableFilter<"TrackedSession"> | string | null
    city?: StringNullableFilter<"TrackedSession"> | string | null
  }

  export type SubscriptionPlanBenefitCreateWithoutPlanInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    value?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    value?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionPlanBenefitCreateOrConnectWithoutPlanInput = {
    where: SubscriptionPlanBenefitWhereUniqueInput
    create: XOR<SubscriptionPlanBenefitCreateWithoutPlanInput, SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionPlanBenefitCreateManyPlanInputEnvelope = {
    data: SubscriptionPlanBenefitCreateManyPlanInput | SubscriptionPlanBenefitCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId: string
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionPlanBenefitUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionPlanBenefitWhereUniqueInput
    update: XOR<SubscriptionPlanBenefitUpdateWithoutPlanInput, SubscriptionPlanBenefitUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionPlanBenefitCreateWithoutPlanInput, SubscriptionPlanBenefitUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionPlanBenefitUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionPlanBenefitWhereUniqueInput
    data: XOR<SubscriptionPlanBenefitUpdateWithoutPlanInput, SubscriptionPlanBenefitUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionPlanBenefitUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionPlanBenefitScalarWhereInput
    data: XOR<SubscriptionPlanBenefitUpdateManyMutationInput, SubscriptionPlanBenefitUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionPlanBenefitScalarWhereInput = {
    AND?: SubscriptionPlanBenefitScalarWhereInput | SubscriptionPlanBenefitScalarWhereInput[]
    OR?: SubscriptionPlanBenefitScalarWhereInput[]
    NOT?: SubscriptionPlanBenefitScalarWhereInput | SubscriptionPlanBenefitScalarWhereInput[]
    id?: StringFilter<"SubscriptionPlanBenefit"> | string
    planId?: StringFilter<"SubscriptionPlanBenefit"> | string
    name?: StringFilter<"SubscriptionPlanBenefit"> | string
    description?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    type?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    value?: StringNullableFilter<"SubscriptionPlanBenefit"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionPlanBenefit"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionPlanCreateWithoutBenefitsInput = {
    id?: string
    polarProductId: string
    name: string
    description?: string | null
    type?: string
    priceAmount: number
    currency?: string
    interval?: string | null
    isActive?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutBenefitsInput = {
    id?: string
    polarProductId: string
    name: string
    description?: string | null
    type?: string
    priceAmount: number
    currency?: string
    interval?: string | null
    isActive?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutBenefitsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutBenefitsInput, SubscriptionPlanUncheckedCreateWithoutBenefitsInput>
  }

  export type SubscriptionPlanUpsertWithoutBenefitsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutBenefitsInput, SubscriptionPlanUncheckedUpdateWithoutBenefitsInput>
    create: XOR<SubscriptionPlanCreateWithoutBenefitsInput, SubscriptionPlanUncheckedCreateWithoutBenefitsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutBenefitsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutBenefitsInput, SubscriptionPlanUncheckedUpdateWithoutBenefitsInput>
  }

  export type SubscriptionPlanUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateWithoutSubscriptionsInput = {
    id?: string
    polarProductId: string
    name: string
    description?: string | null
    type?: string
    priceAmount: number
    currency?: string
    interval?: string | null
    isActive?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SubscriptionPlanBenefitCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    polarProductId: string
    name: string
    description?: string | null
    type?: string
    priceAmount: number
    currency?: string
    interval?: string | null
    isActive?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: SubscriptionPlanBenefitUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type TeamCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    sites?: SiteCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    plan?: string
    polarSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    sites?: SiteUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutSubscriptionsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSubscriptionsInput, TeamUncheckedCreateWithoutSubscriptionsInput>
  }

  export type SubscriptionPlanUpsertWithoutSubscriptionsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionPlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SubscriptionPlanBenefitUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarProductId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    priceAmount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: SubscriptionPlanBenefitUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TeamUpsertWithoutSubscriptionsInput = {
    update: XOR<TeamUpdateWithoutSubscriptionsInput, TeamUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<TeamCreateWithoutSubscriptionsInput, TeamUncheckedCreateWithoutSubscriptionsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutSubscriptionsInput, TeamUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type TeamUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    sites?: SiteUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    sites?: SiteUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type SiteCreateWithoutPageViewEventsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSitesInput
    team?: TeamCreateNestedOneWithoutSitesInput
    eventDefinitions?: EventDefinitionCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutPageViewEventsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teamId?: string | null
    eventDefinitions?: EventDefinitionUncheckedCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutPageViewEventsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutPageViewEventsInput, SiteUncheckedCreateWithoutPageViewEventsInput>
  }

  export type TrackedSessionCreateWithoutPageViewEventsInput = {
    id?: string
    sessionId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
    site: SiteCreateNestedOneWithoutTrackedSessionsInput
  }

  export type TrackedSessionUncheckedCreateWithoutPageViewEventsInput = {
    id?: string
    sessionId: string
    siteId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
  }

  export type TrackedSessionCreateOrConnectWithoutPageViewEventsInput = {
    where: TrackedSessionWhereUniqueInput
    create: XOR<TrackedSessionCreateWithoutPageViewEventsInput, TrackedSessionUncheckedCreateWithoutPageViewEventsInput>
  }

  export type SiteUpsertWithoutPageViewEventsInput = {
    update: XOR<SiteUpdateWithoutPageViewEventsInput, SiteUncheckedUpdateWithoutPageViewEventsInput>
    create: XOR<SiteCreateWithoutPageViewEventsInput, SiteUncheckedCreateWithoutPageViewEventsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutPageViewEventsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutPageViewEventsInput, SiteUncheckedUpdateWithoutPageViewEventsInput>
  }

  export type SiteUpdateWithoutPageViewEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSitesNestedInput
    team?: TeamUpdateOneWithoutSitesNestedInput
    eventDefinitions?: EventDefinitionUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutPageViewEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    eventDefinitions?: EventDefinitionUncheckedUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type TrackedSessionUpsertWithoutPageViewEventsInput = {
    update: XOR<TrackedSessionUpdateWithoutPageViewEventsInput, TrackedSessionUncheckedUpdateWithoutPageViewEventsInput>
    create: XOR<TrackedSessionCreateWithoutPageViewEventsInput, TrackedSessionUncheckedCreateWithoutPageViewEventsInput>
    where?: TrackedSessionWhereInput
  }

  export type TrackedSessionUpdateToOneWithWhereWithoutPageViewEventsInput = {
    where?: TrackedSessionWhereInput
    data: XOR<TrackedSessionUpdateWithoutPageViewEventsInput, TrackedSessionUncheckedUpdateWithoutPageViewEventsInput>
  }

  export type TrackedSessionUpdateWithoutPageViewEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutTrackedSessionsNestedInput
  }

  export type TrackedSessionUncheckedUpdateWithoutPageViewEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteCreateWithoutEventDefinitionsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSitesInput
    team?: TeamCreateNestedOneWithoutSitesInput
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutEventDefinitionsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teamId?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutEventDefinitionsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutEventDefinitionsInput, SiteUncheckedCreateWithoutEventDefinitionsInput>
  }

  export type TrackedEventCreateWithoutEventDefinitionInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    site: SiteCreateNestedOneWithoutTrackedEventsInput
  }

  export type TrackedEventUncheckedCreateWithoutEventDefinitionInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    siteId: string
  }

  export type TrackedEventCreateOrConnectWithoutEventDefinitionInput = {
    where: TrackedEventWhereUniqueInput
    create: XOR<TrackedEventCreateWithoutEventDefinitionInput, TrackedEventUncheckedCreateWithoutEventDefinitionInput>
  }

  export type TrackedEventCreateManyEventDefinitionInputEnvelope = {
    data: TrackedEventCreateManyEventDefinitionInput | TrackedEventCreateManyEventDefinitionInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithoutEventDefinitionsInput = {
    update: XOR<SiteUpdateWithoutEventDefinitionsInput, SiteUncheckedUpdateWithoutEventDefinitionsInput>
    create: XOR<SiteCreateWithoutEventDefinitionsInput, SiteUncheckedCreateWithoutEventDefinitionsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutEventDefinitionsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutEventDefinitionsInput, SiteUncheckedUpdateWithoutEventDefinitionsInput>
  }

  export type SiteUpdateWithoutEventDefinitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSitesNestedInput
    team?: TeamUpdateOneWithoutSitesNestedInput
    pageViewEvents?: PageViewEventUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutEventDefinitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type TrackedEventUpsertWithWhereUniqueWithoutEventDefinitionInput = {
    where: TrackedEventWhereUniqueInput
    update: XOR<TrackedEventUpdateWithoutEventDefinitionInput, TrackedEventUncheckedUpdateWithoutEventDefinitionInput>
    create: XOR<TrackedEventCreateWithoutEventDefinitionInput, TrackedEventUncheckedCreateWithoutEventDefinitionInput>
  }

  export type TrackedEventUpdateWithWhereUniqueWithoutEventDefinitionInput = {
    where: TrackedEventWhereUniqueInput
    data: XOR<TrackedEventUpdateWithoutEventDefinitionInput, TrackedEventUncheckedUpdateWithoutEventDefinitionInput>
  }

  export type TrackedEventUpdateManyWithWhereWithoutEventDefinitionInput = {
    where: TrackedEventScalarWhereInput
    data: XOR<TrackedEventUpdateManyMutationInput, TrackedEventUncheckedUpdateManyWithoutEventDefinitionInput>
  }

  export type EventDefinitionCreateWithoutTrackedEventsInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutEventDefinitionsInput
  }

  export type EventDefinitionUncheckedCreateWithoutTrackedEventsInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    siteId: string
  }

  export type EventDefinitionCreateOrConnectWithoutTrackedEventsInput = {
    where: EventDefinitionWhereUniqueInput
    create: XOR<EventDefinitionCreateWithoutTrackedEventsInput, EventDefinitionUncheckedCreateWithoutTrackedEventsInput>
  }

  export type SiteCreateWithoutTrackedEventsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSitesInput
    team?: TeamCreateNestedOneWithoutSitesInput
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutTrackedEventsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teamId?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionUncheckedCreateNestedManyWithoutSiteInput
    trackedSessions?: TrackedSessionUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutTrackedEventsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutTrackedEventsInput, SiteUncheckedCreateWithoutTrackedEventsInput>
  }

  export type EventDefinitionUpsertWithoutTrackedEventsInput = {
    update: XOR<EventDefinitionUpdateWithoutTrackedEventsInput, EventDefinitionUncheckedUpdateWithoutTrackedEventsInput>
    create: XOR<EventDefinitionCreateWithoutTrackedEventsInput, EventDefinitionUncheckedCreateWithoutTrackedEventsInput>
    where?: EventDefinitionWhereInput
  }

  export type EventDefinitionUpdateToOneWithWhereWithoutTrackedEventsInput = {
    where?: EventDefinitionWhereInput
    data: XOR<EventDefinitionUpdateWithoutTrackedEventsInput, EventDefinitionUncheckedUpdateWithoutTrackedEventsInput>
  }

  export type EventDefinitionUpdateWithoutTrackedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutEventDefinitionsNestedInput
  }

  export type EventDefinitionUncheckedUpdateWithoutTrackedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUpsertWithoutTrackedEventsInput = {
    update: XOR<SiteUpdateWithoutTrackedEventsInput, SiteUncheckedUpdateWithoutTrackedEventsInput>
    create: XOR<SiteCreateWithoutTrackedEventsInput, SiteUncheckedCreateWithoutTrackedEventsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutTrackedEventsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutTrackedEventsInput, SiteUncheckedUpdateWithoutTrackedEventsInput>
  }

  export type SiteUpdateWithoutTrackedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSitesNestedInput
    team?: TeamUpdateOneWithoutSitesNestedInput
    pageViewEvents?: PageViewEventUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutTrackedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUncheckedUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateWithoutTrackedSessionsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSitesInput
    team?: TeamCreateNestedOneWithoutSitesInput
    pageViewEvents?: PageViewEventCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutTrackedSessionsInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teamId?: string | null
    pageViewEvents?: PageViewEventUncheckedCreateNestedManyWithoutSiteInput
    eventDefinitions?: EventDefinitionUncheckedCreateNestedManyWithoutSiteInput
    trackedEvents?: TrackedEventUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutTrackedSessionsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutTrackedSessionsInput, SiteUncheckedCreateWithoutTrackedSessionsInput>
  }

  export type PageViewEventCreateWithoutSessionInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    site: SiteCreateNestedOneWithoutPageViewEventsInput
  }

  export type PageViewEventUncheckedCreateWithoutSessionInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    siteId: string
  }

  export type PageViewEventCreateOrConnectWithoutSessionInput = {
    where: PageViewEventWhereUniqueInput
    create: XOR<PageViewEventCreateWithoutSessionInput, PageViewEventUncheckedCreateWithoutSessionInput>
  }

  export type PageViewEventCreateManySessionInputEnvelope = {
    data: PageViewEventCreateManySessionInput | PageViewEventCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithoutTrackedSessionsInput = {
    update: XOR<SiteUpdateWithoutTrackedSessionsInput, SiteUncheckedUpdateWithoutTrackedSessionsInput>
    create: XOR<SiteCreateWithoutTrackedSessionsInput, SiteUncheckedCreateWithoutTrackedSessionsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutTrackedSessionsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutTrackedSessionsInput, SiteUncheckedUpdateWithoutTrackedSessionsInput>
  }

  export type SiteUpdateWithoutTrackedSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSitesNestedInput
    team?: TeamUpdateOneWithoutSitesNestedInput
    pageViewEvents?: PageViewEventUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutTrackedSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUncheckedUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type PageViewEventUpsertWithWhereUniqueWithoutSessionInput = {
    where: PageViewEventWhereUniqueInput
    update: XOR<PageViewEventUpdateWithoutSessionInput, PageViewEventUncheckedUpdateWithoutSessionInput>
    create: XOR<PageViewEventCreateWithoutSessionInput, PageViewEventUncheckedCreateWithoutSessionInput>
  }

  export type PageViewEventUpdateWithWhereUniqueWithoutSessionInput = {
    where: PageViewEventWhereUniqueInput
    data: XOR<PageViewEventUpdateWithoutSessionInput, PageViewEventUncheckedUpdateWithoutSessionInput>
  }

  export type PageViewEventUpdateManyWithWhereWithoutSessionInput = {
    where: PageViewEventScalarWhereInput
    data: XOR<PageViewEventUpdateManyMutationInput, PageViewEventUncheckedUpdateManyWithoutSessionInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type TeamMemberCreateManyUserInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    teamId: string
  }

  export type SiteCreateManyUserInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutSitesNestedInput
    pageViewEvents?: PageViewEventUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUncheckedUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    userId: string
  }

  export type SiteCreateManyTeamInput = {
    id?: string
    name: string
    domain?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type SubscriptionCreateManyTeamInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    planId: string
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamMembershipsNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSitesNestedInput
    pageViewEvents?: PageViewEventUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSiteNestedInput
    eventDefinitions?: EventDefinitionUncheckedUpdateManyWithoutSiteNestedInput
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutSiteNestedInput
    trackedSessions?: TrackedSessionUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
  }

  export type PageViewEventCreateManySiteInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    sessionId?: string | null
  }

  export type EventDefinitionCreateManySiteInput = {
    id?: string
    name: string
    description?: string | null
    trackingId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackedEventCreateManySiteInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    eventDefinitionId: string
  }

  export type TrackedSessionCreateManySiteInput = {
    id?: string
    sessionId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    duration?: number | null
    didBounce?: boolean
    visitorId?: string | null
    entryPage: string
    exitPage?: string | null
    userAgent?: string | null
    country?: string | null
    city?: string | null
  }

  export type PageViewEventUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    session?: TrackedSessionUpdateOneWithoutPageViewEventsNestedInput
  }

  export type PageViewEventUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewEventUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventDefinitionUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedEvents?: TrackedEventUpdateManyWithoutEventDefinitionNestedInput
  }

  export type EventDefinitionUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackedEvents?: TrackedEventUncheckedUpdateManyWithoutEventDefinitionNestedInput
  }

  export type EventDefinitionUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trackingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedEventUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDefinition?: EventDefinitionUpdateOneRequiredWithoutTrackedEventsNestedInput
  }

  export type TrackedEventUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedEventUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedSessionUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUpdateManyWithoutSessionNestedInput
  }

  export type TrackedSessionUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewEvents?: PageViewEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TrackedSessionUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    didBounce?: BoolFieldUpdateOperationsInput | boolean
    visitorId?: NullableStringFieldUpdateOperationsInput | string | null
    entryPage?: StringFieldUpdateOperationsInput | string
    exitPage?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionPlanBenefitCreateManyPlanInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    value?: string | null
    createdAt?: Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    polarSubscriptionId: string
    polarCustomerId?: string | null
    status: string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId: string
  }

  export type SubscriptionPlanBenefitUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanBenefitUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanBenefitUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    polarSubscriptionId?: StringFieldUpdateOperationsInput | string
    polarCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedEventCreateManyEventDefinitionInput = {
    id?: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    siteId: string
  }

  export type TrackedEventUpdateWithoutEventDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutTrackedEventsNestedInput
  }

  export type TrackedEventUncheckedUpdateWithoutEventDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedEventUncheckedUpdateManyWithoutEventDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type PageViewEventCreateManySessionInput = {
    id?: string
    url: string
    timestamp: Date | string
    createdAt?: Date | string
    ip?: string | null
    country?: string | null
    countryCode?: string | null
    region?: string | null
    regionName?: string | null
    city?: string | null
    zip?: string | null
    lat?: number | null
    lon?: number | null
    timezone?: string | null
    isp?: string | null
    mobile?: boolean | null
    userAgent?: string | null
    siteId: string
  }

  export type PageViewEventUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutPageViewEventsNestedInput
  }

  export type PageViewEventUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type PageViewEventUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}