
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
 * Model Catalog
 * 
 */
export type Catalog = $Result.DefaultSelection<Prisma.$CatalogPayload>
/**
 * Model Highlights
 * 
 */
export type Highlights = $Result.DefaultSelection<Prisma.$HighlightsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Catalogs
 * const catalogs = await prisma.catalog.findMany()
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
   * // Fetch zero or more Catalogs
   * const catalogs = await prisma.catalog.findMany()
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
   * `prisma.catalog`: Exposes CRUD operations for the **Catalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catalogs
    * const catalogs = await prisma.catalog.findMany()
    * ```
    */
  get catalog(): Prisma.CatalogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlights`: Exposes CRUD operations for the **Highlights** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Highlights
    * const highlights = await prisma.highlights.findMany()
    * ```
    */
  get highlights(): Prisma.HighlightsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Catalog: 'Catalog',
    Highlights: 'Highlights'
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
      modelProps: "catalog" | "highlights"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Catalog: {
        payload: Prisma.$CatalogPayload<ExtArgs>
        fields: Prisma.CatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatalogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatalogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          findFirst: {
            args: Prisma.CatalogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatalogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          findMany: {
            args: Prisma.CatalogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>[]
          }
          create: {
            args: Prisma.CatalogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          createMany: {
            args: Prisma.CatalogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CatalogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>[]
          }
          delete: {
            args: Prisma.CatalogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          update: {
            args: Prisma.CatalogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          deleteMany: {
            args: Prisma.CatalogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatalogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CatalogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>[]
          }
          upsert: {
            args: Prisma.CatalogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogPayload>
          }
          aggregate: {
            args: Prisma.CatalogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalog>
          }
          groupBy: {
            args: Prisma.CatalogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatalogCountArgs<ExtArgs>
            result: $Utils.Optional<CatalogCountAggregateOutputType> | number
          }
        }
      }
      Highlights: {
        payload: Prisma.$HighlightsPayload<ExtArgs>
        fields: Prisma.HighlightsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>
          }
          findFirst: {
            args: Prisma.HighlightsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>
          }
          findMany: {
            args: Prisma.HighlightsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>[]
          }
          create: {
            args: Prisma.HighlightsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>
          }
          createMany: {
            args: Prisma.HighlightsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HighlightsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>[]
          }
          delete: {
            args: Prisma.HighlightsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>
          }
          update: {
            args: Prisma.HighlightsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>
          }
          deleteMany: {
            args: Prisma.HighlightsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HighlightsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>[]
          }
          upsert: {
            args: Prisma.HighlightsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightsPayload>
          }
          aggregate: {
            args: Prisma.HighlightsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlights>
          }
          groupBy: {
            args: Prisma.HighlightsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighlightsCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightsCountAggregateOutputType> | number
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
    catalog?: CatalogOmit
    highlights?: HighlightsOmit
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
   * Models
   */

  /**
   * Model Catalog
   */

  export type AggregateCatalog = {
    _count: CatalogCountAggregateOutputType | null
    _avg: CatalogAvgAggregateOutputType | null
    _sum: CatalogSumAggregateOutputType | null
    _min: CatalogMinAggregateOutputType | null
    _max: CatalogMaxAggregateOutputType | null
  }

  export type CatalogAvgAggregateOutputType = {
    id: number | null
  }

  export type CatalogSumAggregateOutputType = {
    id: number | null
  }

  export type CatalogMinAggregateOutputType = {
    id: number | null
    name: string | null
    rickDead: string | null
    img: string | null
    description: string | null
  }

  export type CatalogMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rickDead: string | null
    img: string | null
    description: string | null
  }

  export type CatalogCountAggregateOutputType = {
    id: number
    name: number
    rickDead: number
    img: number
    description: number
    _all: number
  }


  export type CatalogAvgAggregateInputType = {
    id?: true
  }

  export type CatalogSumAggregateInputType = {
    id?: true
  }

  export type CatalogMinAggregateInputType = {
    id?: true
    name?: true
    rickDead?: true
    img?: true
    description?: true
  }

  export type CatalogMaxAggregateInputType = {
    id?: true
    name?: true
    rickDead?: true
    img?: true
    description?: true
  }

  export type CatalogCountAggregateInputType = {
    id?: true
    name?: true
    rickDead?: true
    img?: true
    description?: true
    _all?: true
  }

  export type CatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalog to aggregate.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Catalogs
    **/
    _count?: true | CatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatalogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatalogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogMaxAggregateInputType
  }

  export type GetCatalogAggregateType<T extends CatalogAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalog[P]>
      : GetScalarType<T[P], AggregateCatalog[P]>
  }




  export type CatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogWhereInput
    orderBy?: CatalogOrderByWithAggregationInput | CatalogOrderByWithAggregationInput[]
    by: CatalogScalarFieldEnum[] | CatalogScalarFieldEnum
    having?: CatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogCountAggregateInputType | true
    _avg?: CatalogAvgAggregateInputType
    _sum?: CatalogSumAggregateInputType
    _min?: CatalogMinAggregateInputType
    _max?: CatalogMaxAggregateInputType
  }

  export type CatalogGroupByOutputType = {
    id: number
    name: string
    rickDead: string
    img: string
    description: string
    _count: CatalogCountAggregateOutputType | null
    _avg: CatalogAvgAggregateOutputType | null
    _sum: CatalogSumAggregateOutputType | null
    _min: CatalogMinAggregateOutputType | null
    _max: CatalogMaxAggregateOutputType | null
  }

  type GetCatalogGroupByPayload<T extends CatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogGroupByOutputType[P]>
        }
      >
    >


  export type CatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }, ExtArgs["result"]["catalog"]>

  export type CatalogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }, ExtArgs["result"]["catalog"]>

  export type CatalogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }, ExtArgs["result"]["catalog"]>

  export type CatalogSelectScalar = {
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }

  export type CatalogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rickDead" | "img" | "description", ExtArgs["result"]["catalog"]>

  export type $CatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Catalog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rickDead: string
      img: string
      description: string
    }, ExtArgs["result"]["catalog"]>
    composites: {}
  }

  type CatalogGetPayload<S extends boolean | null | undefined | CatalogDefaultArgs> = $Result.GetResult<Prisma.$CatalogPayload, S>

  type CatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatalogCountAggregateInputType | true
    }

  export interface CatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Catalog'], meta: { name: 'Catalog' } }
    /**
     * Find zero or one Catalog that matches the filter.
     * @param {CatalogFindUniqueArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatalogFindUniqueArgs>(args: SelectSubset<T, CatalogFindUniqueArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Catalog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatalogFindUniqueOrThrowArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatalogFindUniqueOrThrowArgs>(args: SelectSubset<T, CatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindFirstArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatalogFindFirstArgs>(args?: SelectSubset<T, CatalogFindFirstArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Catalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindFirstOrThrowArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatalogFindFirstOrThrowArgs>(args?: SelectSubset<T, CatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Catalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catalogs
     * const catalogs = await prisma.catalog.findMany()
     * 
     * // Get first 10 Catalogs
     * const catalogs = await prisma.catalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catalogWithIdOnly = await prisma.catalog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CatalogFindManyArgs>(args?: SelectSubset<T, CatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Catalog.
     * @param {CatalogCreateArgs} args - Arguments to create a Catalog.
     * @example
     * // Create one Catalog
     * const Catalog = await prisma.catalog.create({
     *   data: {
     *     // ... data to create a Catalog
     *   }
     * })
     * 
     */
    create<T extends CatalogCreateArgs>(args: SelectSubset<T, CatalogCreateArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Catalogs.
     * @param {CatalogCreateManyArgs} args - Arguments to create many Catalogs.
     * @example
     * // Create many Catalogs
     * const catalog = await prisma.catalog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatalogCreateManyArgs>(args?: SelectSubset<T, CatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Catalogs and returns the data saved in the database.
     * @param {CatalogCreateManyAndReturnArgs} args - Arguments to create many Catalogs.
     * @example
     * // Create many Catalogs
     * const catalog = await prisma.catalog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Catalogs and only return the `id`
     * const catalogWithIdOnly = await prisma.catalog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CatalogCreateManyAndReturnArgs>(args?: SelectSubset<T, CatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Catalog.
     * @param {CatalogDeleteArgs} args - Arguments to delete one Catalog.
     * @example
     * // Delete one Catalog
     * const Catalog = await prisma.catalog.delete({
     *   where: {
     *     // ... filter to delete one Catalog
     *   }
     * })
     * 
     */
    delete<T extends CatalogDeleteArgs>(args: SelectSubset<T, CatalogDeleteArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Catalog.
     * @param {CatalogUpdateArgs} args - Arguments to update one Catalog.
     * @example
     * // Update one Catalog
     * const catalog = await prisma.catalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatalogUpdateArgs>(args: SelectSubset<T, CatalogUpdateArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Catalogs.
     * @param {CatalogDeleteManyArgs} args - Arguments to filter Catalogs to delete.
     * @example
     * // Delete a few Catalogs
     * const { count } = await prisma.catalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatalogDeleteManyArgs>(args?: SelectSubset<T, CatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catalogs
     * const catalog = await prisma.catalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatalogUpdateManyArgs>(args: SelectSubset<T, CatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogs and returns the data updated in the database.
     * @param {CatalogUpdateManyAndReturnArgs} args - Arguments to update many Catalogs.
     * @example
     * // Update many Catalogs
     * const catalog = await prisma.catalog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Catalogs and only return the `id`
     * const catalogWithIdOnly = await prisma.catalog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CatalogUpdateManyAndReturnArgs>(args: SelectSubset<T, CatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Catalog.
     * @param {CatalogUpsertArgs} args - Arguments to update or create a Catalog.
     * @example
     * // Update or create a Catalog
     * const catalog = await prisma.catalog.upsert({
     *   create: {
     *     // ... data to create a Catalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catalog we want to update
     *   }
     * })
     */
    upsert<T extends CatalogUpsertArgs>(args: SelectSubset<T, CatalogUpsertArgs<ExtArgs>>): Prisma__CatalogClient<$Result.GetResult<Prisma.$CatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogCountArgs} args - Arguments to filter Catalogs to count.
     * @example
     * // Count the number of Catalogs
     * const count = await prisma.catalog.count({
     *   where: {
     *     // ... the filter for the Catalogs we want to count
     *   }
     * })
    **/
    count<T extends CatalogCountArgs>(
      args?: Subset<T, CatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CatalogAggregateArgs>(args: Subset<T, CatalogAggregateArgs>): Prisma.PrismaPromise<GetCatalogAggregateType<T>>

    /**
     * Group by Catalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogGroupByArgs} args - Group by arguments.
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
      T extends CatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogGroupByArgs['orderBy'] }
        : { orderBy?: CatalogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Catalog model
   */
  readonly fields: CatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Catalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Catalog model
   */
  interface CatalogFieldRefs {
    readonly id: FieldRef<"Catalog", 'Int'>
    readonly name: FieldRef<"Catalog", 'String'>
    readonly rickDead: FieldRef<"Catalog", 'String'>
    readonly img: FieldRef<"Catalog", 'String'>
    readonly description: FieldRef<"Catalog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Catalog findUnique
   */
  export type CatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog findUniqueOrThrow
   */
  export type CatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog findFirst
   */
  export type CatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogs.
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogs.
     */
    distinct?: CatalogScalarFieldEnum | CatalogScalarFieldEnum[]
  }

  /**
   * Catalog findFirstOrThrow
   */
  export type CatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Filter, which Catalog to fetch.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogs.
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogs.
     */
    distinct?: CatalogScalarFieldEnum | CatalogScalarFieldEnum[]
  }

  /**
   * Catalog findMany
   */
  export type CatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Filter, which Catalogs to fetch.
     */
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
     */
    orderBy?: CatalogOrderByWithRelationInput | CatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Catalogs.
     */
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
     */
    skip?: number
    distinct?: CatalogScalarFieldEnum | CatalogScalarFieldEnum[]
  }

  /**
   * Catalog create
   */
  export type CatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * The data needed to create a Catalog.
     */
    data: XOR<CatalogCreateInput, CatalogUncheckedCreateInput>
  }

  /**
   * Catalog createMany
   */
  export type CatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Catalogs.
     */
    data: CatalogCreateManyInput | CatalogCreateManyInput[]
  }

  /**
   * Catalog createManyAndReturn
   */
  export type CatalogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * The data used to create many Catalogs.
     */
    data: CatalogCreateManyInput | CatalogCreateManyInput[]
  }

  /**
   * Catalog update
   */
  export type CatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * The data needed to update a Catalog.
     */
    data: XOR<CatalogUpdateInput, CatalogUncheckedUpdateInput>
    /**
     * Choose, which Catalog to update.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog updateMany
   */
  export type CatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Catalogs.
     */
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyInput>
    /**
     * Filter which Catalogs to update
     */
    where?: CatalogWhereInput
    /**
     * Limit how many Catalogs to update.
     */
    limit?: number
  }

  /**
   * Catalog updateManyAndReturn
   */
  export type CatalogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * The data used to update Catalogs.
     */
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyInput>
    /**
     * Filter which Catalogs to update
     */
    where?: CatalogWhereInput
    /**
     * Limit how many Catalogs to update.
     */
    limit?: number
  }

  /**
   * Catalog upsert
   */
  export type CatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * The filter to search for the Catalog to update in case it exists.
     */
    where: CatalogWhereUniqueInput
    /**
     * In case the Catalog found by the `where` argument doesn't exist, create a new Catalog with this data.
     */
    create: XOR<CatalogCreateInput, CatalogUncheckedCreateInput>
    /**
     * In case the Catalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatalogUpdateInput, CatalogUncheckedUpdateInput>
  }

  /**
   * Catalog delete
   */
  export type CatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
    /**
     * Filter which Catalog to delete.
     */
    where: CatalogWhereUniqueInput
  }

  /**
   * Catalog deleteMany
   */
  export type CatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Catalogs to delete
     */
    where?: CatalogWhereInput
    /**
     * Limit how many Catalogs to delete.
     */
    limit?: number
  }

  /**
   * Catalog without action
   */
  export type CatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Catalog
     */
    select?: CatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Catalog
     */
    omit?: CatalogOmit<ExtArgs> | null
  }


  /**
   * Model Highlights
   */

  export type AggregateHighlights = {
    _count: HighlightsCountAggregateOutputType | null
    _avg: HighlightsAvgAggregateOutputType | null
    _sum: HighlightsSumAggregateOutputType | null
    _min: HighlightsMinAggregateOutputType | null
    _max: HighlightsMaxAggregateOutputType | null
  }

  export type HighlightsAvgAggregateOutputType = {
    id: number | null
  }

  export type HighlightsSumAggregateOutputType = {
    id: number | null
  }

  export type HighlightsMinAggregateOutputType = {
    id: number | null
    name: string | null
    rickDead: string | null
    img: string | null
    description: string | null
  }

  export type HighlightsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rickDead: string | null
    img: string | null
    description: string | null
  }

  export type HighlightsCountAggregateOutputType = {
    id: number
    name: number
    rickDead: number
    img: number
    description: number
    _all: number
  }


  export type HighlightsAvgAggregateInputType = {
    id?: true
  }

  export type HighlightsSumAggregateInputType = {
    id?: true
  }

  export type HighlightsMinAggregateInputType = {
    id?: true
    name?: true
    rickDead?: true
    img?: true
    description?: true
  }

  export type HighlightsMaxAggregateInputType = {
    id?: true
    name?: true
    rickDead?: true
    img?: true
    description?: true
  }

  export type HighlightsCountAggregateInputType = {
    id?: true
    name?: true
    rickDead?: true
    img?: true
    description?: true
    _all?: true
  }

  export type HighlightsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlights to aggregate.
     */
    where?: HighlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightsOrderByWithRelationInput | HighlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Highlights
    **/
    _count?: true | HighlightsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HighlightsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HighlightsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightsMaxAggregateInputType
  }

  export type GetHighlightsAggregateType<T extends HighlightsAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlights]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlights[P]>
      : GetScalarType<T[P], AggregateHighlights[P]>
  }




  export type HighlightsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightsWhereInput
    orderBy?: HighlightsOrderByWithAggregationInput | HighlightsOrderByWithAggregationInput[]
    by: HighlightsScalarFieldEnum[] | HighlightsScalarFieldEnum
    having?: HighlightsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightsCountAggregateInputType | true
    _avg?: HighlightsAvgAggregateInputType
    _sum?: HighlightsSumAggregateInputType
    _min?: HighlightsMinAggregateInputType
    _max?: HighlightsMaxAggregateInputType
  }

  export type HighlightsGroupByOutputType = {
    id: number
    name: string
    rickDead: string
    img: string
    description: string
    _count: HighlightsCountAggregateOutputType | null
    _avg: HighlightsAvgAggregateOutputType | null
    _sum: HighlightsSumAggregateOutputType | null
    _min: HighlightsMinAggregateOutputType | null
    _max: HighlightsMaxAggregateOutputType | null
  }

  type GetHighlightsGroupByPayload<T extends HighlightsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightsGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightsGroupByOutputType[P]>
        }
      >
    >


  export type HighlightsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }, ExtArgs["result"]["highlights"]>

  export type HighlightsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }, ExtArgs["result"]["highlights"]>

  export type HighlightsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }, ExtArgs["result"]["highlights"]>

  export type HighlightsSelectScalar = {
    id?: boolean
    name?: boolean
    rickDead?: boolean
    img?: boolean
    description?: boolean
  }

  export type HighlightsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rickDead" | "img" | "description", ExtArgs["result"]["highlights"]>

  export type $HighlightsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Highlights"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rickDead: string
      img: string
      description: string
    }, ExtArgs["result"]["highlights"]>
    composites: {}
  }

  type HighlightsGetPayload<S extends boolean | null | undefined | HighlightsDefaultArgs> = $Result.GetResult<Prisma.$HighlightsPayload, S>

  type HighlightsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightsCountAggregateInputType | true
    }

  export interface HighlightsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Highlights'], meta: { name: 'Highlights' } }
    /**
     * Find zero or one Highlights that matches the filter.
     * @param {HighlightsFindUniqueArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightsFindUniqueArgs>(args: SelectSubset<T, HighlightsFindUniqueArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Highlights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightsFindUniqueOrThrowArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightsFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsFindFirstArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightsFindFirstArgs>(args?: SelectSubset<T, HighlightsFindFirstArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsFindFirstOrThrowArgs} args - Arguments to find a Highlights
     * @example
     * // Get one Highlights
     * const highlights = await prisma.highlights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightsFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Highlights
     * const highlights = await prisma.highlights.findMany()
     * 
     * // Get first 10 Highlights
     * const highlights = await prisma.highlights.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightsWithIdOnly = await prisma.highlights.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightsFindManyArgs>(args?: SelectSubset<T, HighlightsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Highlights.
     * @param {HighlightsCreateArgs} args - Arguments to create a Highlights.
     * @example
     * // Create one Highlights
     * const Highlights = await prisma.highlights.create({
     *   data: {
     *     // ... data to create a Highlights
     *   }
     * })
     * 
     */
    create<T extends HighlightsCreateArgs>(args: SelectSubset<T, HighlightsCreateArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Highlights.
     * @param {HighlightsCreateManyArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlights = await prisma.highlights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightsCreateManyArgs>(args?: SelectSubset<T, HighlightsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Highlights and returns the data saved in the database.
     * @param {HighlightsCreateManyAndReturnArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlights = await prisma.highlights.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Highlights and only return the `id`
     * const highlightsWithIdOnly = await prisma.highlights.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HighlightsCreateManyAndReturnArgs>(args?: SelectSubset<T, HighlightsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Highlights.
     * @param {HighlightsDeleteArgs} args - Arguments to delete one Highlights.
     * @example
     * // Delete one Highlights
     * const Highlights = await prisma.highlights.delete({
     *   where: {
     *     // ... filter to delete one Highlights
     *   }
     * })
     * 
     */
    delete<T extends HighlightsDeleteArgs>(args: SelectSubset<T, HighlightsDeleteArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Highlights.
     * @param {HighlightsUpdateArgs} args - Arguments to update one Highlights.
     * @example
     * // Update one Highlights
     * const highlights = await prisma.highlights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightsUpdateArgs>(args: SelectSubset<T, HighlightsUpdateArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Highlights.
     * @param {HighlightsDeleteManyArgs} args - Arguments to filter Highlights to delete.
     * @example
     * // Delete a few Highlights
     * const { count } = await prisma.highlights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightsDeleteManyArgs>(args?: SelectSubset<T, HighlightsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Highlights
     * const highlights = await prisma.highlights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightsUpdateManyArgs>(args: SelectSubset<T, HighlightsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights and returns the data updated in the database.
     * @param {HighlightsUpdateManyAndReturnArgs} args - Arguments to update many Highlights.
     * @example
     * // Update many Highlights
     * const highlights = await prisma.highlights.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Highlights and only return the `id`
     * const highlightsWithIdOnly = await prisma.highlights.updateManyAndReturn({
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
    updateManyAndReturn<T extends HighlightsUpdateManyAndReturnArgs>(args: SelectSubset<T, HighlightsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Highlights.
     * @param {HighlightsUpsertArgs} args - Arguments to update or create a Highlights.
     * @example
     * // Update or create a Highlights
     * const highlights = await prisma.highlights.upsert({
     *   create: {
     *     // ... data to create a Highlights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Highlights we want to update
     *   }
     * })
     */
    upsert<T extends HighlightsUpsertArgs>(args: SelectSubset<T, HighlightsUpsertArgs<ExtArgs>>): Prisma__HighlightsClient<$Result.GetResult<Prisma.$HighlightsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsCountArgs} args - Arguments to filter Highlights to count.
     * @example
     * // Count the number of Highlights
     * const count = await prisma.highlights.count({
     *   where: {
     *     // ... the filter for the Highlights we want to count
     *   }
     * })
    **/
    count<T extends HighlightsCountArgs>(
      args?: Subset<T, HighlightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightsAggregateArgs>(args: Subset<T, HighlightsAggregateArgs>): Prisma.PrismaPromise<GetHighlightsAggregateType<T>>

    /**
     * Group by Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightsGroupByArgs} args - Group by arguments.
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
      T extends HighlightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightsGroupByArgs['orderBy'] }
        : { orderBy?: HighlightsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Highlights model
   */
  readonly fields: HighlightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Highlights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Highlights model
   */
  interface HighlightsFieldRefs {
    readonly id: FieldRef<"Highlights", 'Int'>
    readonly name: FieldRef<"Highlights", 'String'>
    readonly rickDead: FieldRef<"Highlights", 'String'>
    readonly img: FieldRef<"Highlights", 'String'>
    readonly description: FieldRef<"Highlights", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Highlights findUnique
   */
  export type HighlightsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where: HighlightsWhereUniqueInput
  }

  /**
   * Highlights findUniqueOrThrow
   */
  export type HighlightsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where: HighlightsWhereUniqueInput
  }

  /**
   * Highlights findFirst
   */
  export type HighlightsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightsOrderByWithRelationInput | HighlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightsScalarFieldEnum | HighlightsScalarFieldEnum[]
  }

  /**
   * Highlights findFirstOrThrow
   */
  export type HighlightsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightsOrderByWithRelationInput | HighlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightsScalarFieldEnum | HighlightsScalarFieldEnum[]
  }

  /**
   * Highlights findMany
   */
  export type HighlightsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightsOrderByWithRelationInput | HighlightsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Highlights.
     */
    cursor?: HighlightsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    distinct?: HighlightsScalarFieldEnum | HighlightsScalarFieldEnum[]
  }

  /**
   * Highlights create
   */
  export type HighlightsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * The data needed to create a Highlights.
     */
    data: XOR<HighlightsCreateInput, HighlightsUncheckedCreateInput>
  }

  /**
   * Highlights createMany
   */
  export type HighlightsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Highlights.
     */
    data: HighlightsCreateManyInput | HighlightsCreateManyInput[]
  }

  /**
   * Highlights createManyAndReturn
   */
  export type HighlightsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * The data used to create many Highlights.
     */
    data: HighlightsCreateManyInput | HighlightsCreateManyInput[]
  }

  /**
   * Highlights update
   */
  export type HighlightsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * The data needed to update a Highlights.
     */
    data: XOR<HighlightsUpdateInput, HighlightsUncheckedUpdateInput>
    /**
     * Choose, which Highlights to update.
     */
    where: HighlightsWhereUniqueInput
  }

  /**
   * Highlights updateMany
   */
  export type HighlightsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightsUpdateManyMutationInput, HighlightsUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightsWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
  }

  /**
   * Highlights updateManyAndReturn
   */
  export type HighlightsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightsUpdateManyMutationInput, HighlightsUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightsWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
  }

  /**
   * Highlights upsert
   */
  export type HighlightsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * The filter to search for the Highlights to update in case it exists.
     */
    where: HighlightsWhereUniqueInput
    /**
     * In case the Highlights found by the `where` argument doesn't exist, create a new Highlights with this data.
     */
    create: XOR<HighlightsCreateInput, HighlightsUncheckedCreateInput>
    /**
     * In case the Highlights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightsUpdateInput, HighlightsUncheckedUpdateInput>
  }

  /**
   * Highlights delete
   */
  export type HighlightsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
    /**
     * Filter which Highlights to delete.
     */
    where: HighlightsWhereUniqueInput
  }

  /**
   * Highlights deleteMany
   */
  export type HighlightsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlights to delete
     */
    where?: HighlightsWhereInput
    /**
     * Limit how many Highlights to delete.
     */
    limit?: number
  }

  /**
   * Highlights without action
   */
  export type HighlightsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlights
     */
    select?: HighlightsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlights
     */
    omit?: HighlightsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CatalogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rickDead: 'rickDead',
    img: 'img',
    description: 'description'
  };

  export type CatalogScalarFieldEnum = (typeof CatalogScalarFieldEnum)[keyof typeof CatalogScalarFieldEnum]


  export const HighlightsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rickDead: 'rickDead',
    img: 'img',
    description: 'description'
  };

  export type HighlightsScalarFieldEnum = (typeof HighlightsScalarFieldEnum)[keyof typeof HighlightsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CatalogWhereInput = {
    AND?: CatalogWhereInput | CatalogWhereInput[]
    OR?: CatalogWhereInput[]
    NOT?: CatalogWhereInput | CatalogWhereInput[]
    id?: IntFilter<"Catalog"> | number
    name?: StringFilter<"Catalog"> | string
    rickDead?: StringFilter<"Catalog"> | string
    img?: StringFilter<"Catalog"> | string
    description?: StringFilter<"Catalog"> | string
  }

  export type CatalogOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type CatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CatalogWhereInput | CatalogWhereInput[]
    OR?: CatalogWhereInput[]
    NOT?: CatalogWhereInput | CatalogWhereInput[]
    name?: StringFilter<"Catalog"> | string
    rickDead?: StringFilter<"Catalog"> | string
    img?: StringFilter<"Catalog"> | string
    description?: StringFilter<"Catalog"> | string
  }, "id">

  export type CatalogOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
    _count?: CatalogCountOrderByAggregateInput
    _avg?: CatalogAvgOrderByAggregateInput
    _max?: CatalogMaxOrderByAggregateInput
    _min?: CatalogMinOrderByAggregateInput
    _sum?: CatalogSumOrderByAggregateInput
  }

  export type CatalogScalarWhereWithAggregatesInput = {
    AND?: CatalogScalarWhereWithAggregatesInput | CatalogScalarWhereWithAggregatesInput[]
    OR?: CatalogScalarWhereWithAggregatesInput[]
    NOT?: CatalogScalarWhereWithAggregatesInput | CatalogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Catalog"> | number
    name?: StringWithAggregatesFilter<"Catalog"> | string
    rickDead?: StringWithAggregatesFilter<"Catalog"> | string
    img?: StringWithAggregatesFilter<"Catalog"> | string
    description?: StringWithAggregatesFilter<"Catalog"> | string
  }

  export type HighlightsWhereInput = {
    AND?: HighlightsWhereInput | HighlightsWhereInput[]
    OR?: HighlightsWhereInput[]
    NOT?: HighlightsWhereInput | HighlightsWhereInput[]
    id?: IntFilter<"Highlights"> | number
    name?: StringFilter<"Highlights"> | string
    rickDead?: StringFilter<"Highlights"> | string
    img?: StringFilter<"Highlights"> | string
    description?: StringFilter<"Highlights"> | string
  }

  export type HighlightsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type HighlightsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HighlightsWhereInput | HighlightsWhereInput[]
    OR?: HighlightsWhereInput[]
    NOT?: HighlightsWhereInput | HighlightsWhereInput[]
    name?: StringFilter<"Highlights"> | string
    rickDead?: StringFilter<"Highlights"> | string
    img?: StringFilter<"Highlights"> | string
    description?: StringFilter<"Highlights"> | string
  }, "id">

  export type HighlightsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
    _count?: HighlightsCountOrderByAggregateInput
    _avg?: HighlightsAvgOrderByAggregateInput
    _max?: HighlightsMaxOrderByAggregateInput
    _min?: HighlightsMinOrderByAggregateInput
    _sum?: HighlightsSumOrderByAggregateInput
  }

  export type HighlightsScalarWhereWithAggregatesInput = {
    AND?: HighlightsScalarWhereWithAggregatesInput | HighlightsScalarWhereWithAggregatesInput[]
    OR?: HighlightsScalarWhereWithAggregatesInput[]
    NOT?: HighlightsScalarWhereWithAggregatesInput | HighlightsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Highlights"> | number
    name?: StringWithAggregatesFilter<"Highlights"> | string
    rickDead?: StringWithAggregatesFilter<"Highlights"> | string
    img?: StringWithAggregatesFilter<"Highlights"> | string
    description?: StringWithAggregatesFilter<"Highlights"> | string
  }

  export type CatalogCreateInput = {
    name: string
    rickDead: string
    img: string
    description: string
  }

  export type CatalogUncheckedCreateInput = {
    id?: number
    name: string
    rickDead: string
    img: string
    description: string
  }

  export type CatalogUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogCreateManyInput = {
    id?: number
    name: string
    rickDead: string
    img: string
    description: string
  }

  export type CatalogUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightsCreateInput = {
    name: string
    rickDead: string
    img: string
    description: string
  }

  export type HighlightsUncheckedCreateInput = {
    id?: number
    name: string
    rickDead: string
    img: string
    description: string
  }

  export type HighlightsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightsCreateManyInput = {
    id?: number
    name: string
    rickDead: string
    img: string
    description: string
  }

  export type HighlightsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rickDead?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CatalogCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type CatalogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type CatalogMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type CatalogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type HighlightsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type HighlightsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HighlightsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type HighlightsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rickDead?: SortOrder
    img?: SortOrder
    description?: SortOrder
  }

  export type HighlightsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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