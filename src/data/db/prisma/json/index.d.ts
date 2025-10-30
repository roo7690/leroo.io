
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
 * Model BlogsAuts
 * 
 */
export type BlogsAuts = $Result.DefaultSelection<Prisma.$BlogsAutsPayload>
/**
 * Model BlogsImg
 * 
 */
export type BlogsImg = $Result.DefaultSelection<Prisma.$BlogsImgPayload>
/**
 * Model CommentsReactions
 * 
 */
export type CommentsReactions = $Result.DefaultSelection<Prisma.$CommentsReactionsPayload>
/**
 * Model CommentsComments
 * 
 */
export type CommentsComments = $Result.DefaultSelection<Prisma.$CommentsCommentsPayload>
/**
 * Model CommentsCommentsResponse
 * 
 */
export type CommentsCommentsResponse = $Result.DefaultSelection<Prisma.$CommentsCommentsResponsePayload>
/**
 * Model ProjectsMoreDescription
 * 
 */
export type ProjectsMoreDescription = $Result.DefaultSelection<Prisma.$ProjectsMoreDescriptionPayload>
/**
 * Model ProjectsImage
 * 
 */
export type ProjectsImage = $Result.DefaultSelection<Prisma.$ProjectsImagePayload>
/**
 * Model ProjectsTitle
 * 
 */
export type ProjectsTitle = $Result.DefaultSelection<Prisma.$ProjectsTitlePayload>
/**
 * Model ProjectsTitleFont
 * 
 */
export type ProjectsTitleFont = $Result.DefaultSelection<Prisma.$ProjectsTitleFontPayload>
/**
 * Model JobsDate
 * 
 */
export type JobsDate = $Result.DefaultSelection<Prisma.$JobsDatePayload>
/**
 * Model JobsMedia
 * 
 */
export type JobsMedia = $Result.DefaultSelection<Prisma.$JobsMediaPayload>
/**
 * Model blogs
 * 
 */
export type blogs = $Result.DefaultSelection<Prisma.$blogsPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model hashtags
 * 
 */
export type hashtags = $Result.DefaultSelection<Prisma.$hashtagsPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model skills
 * 
 */
export type skills = $Result.DefaultSelection<Prisma.$skillsPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model testimonials
 * 
 */
export type testimonials = $Result.DefaultSelection<Prisma.$testimonialsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blogs
 * const blogs = await prisma.blogs.findMany()
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
   * // Fetch zero or more Blogs
   * const blogs = await prisma.blogs.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.blogs`: Exposes CRUD operations for the **blogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blogs.findMany()
    * ```
    */
  get blogs(): Prisma.blogsDelegate<ExtArgs>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs>;

  /**
   * `prisma.hashtags`: Exposes CRUD operations for the **hashtags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtags.findMany()
    * ```
    */
  get hashtags(): Prisma.hashtagsDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.skillsDelegate<ExtArgs>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs>;

  /**
   * `prisma.testimonials`: Exposes CRUD operations for the **testimonials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonials.findMany()
    * ```
    */
  get testimonials(): Prisma.testimonialsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.21.0
   * Query Engine version: 08713a93b99d58f31485621c634b04983ae01d95
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    blogs: 'blogs',
    comments: 'comments',
    hashtags: 'hashtags',
    projects: 'projects',
    skills: 'skills',
    jobs: 'jobs',
    testimonials: 'testimonials'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db_json?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "blogs" | "comments" | "hashtags" | "projects" | "skills" | "jobs" | "testimonials"
      txIsolationLevel: never
    }
    model: {
      blogs: {
        payload: Prisma.$blogsPayload<ExtArgs>
        fields: Prisma.blogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findFirst: {
            args: Prisma.blogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          findMany: {
            args: Prisma.blogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>[]
          }
          create: {
            args: Prisma.blogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          createMany: {
            args: Prisma.blogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          update: {
            args: Prisma.blogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          deleteMany: {
            args: Prisma.blogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogsPayload>
          }
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogs>
          }
          groupBy: {
            args: Prisma.blogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.blogsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.blogsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.blogsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.commentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.commentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      hashtags: {
        payload: Prisma.$hashtagsPayload<ExtArgs>
        fields: Prisma.hashtagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hashtagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hashtagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload>
          }
          findFirst: {
            args: Prisma.hashtagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hashtagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload>
          }
          findMany: {
            args: Prisma.hashtagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload>[]
          }
          create: {
            args: Prisma.hashtagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload>
          }
          createMany: {
            args: Prisma.hashtagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hashtagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload>
          }
          update: {
            args: Prisma.hashtagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload>
          }
          deleteMany: {
            args: Prisma.hashtagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hashtagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hashtagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hashtagsPayload>
          }
          aggregate: {
            args: Prisma.HashtagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHashtags>
          }
          groupBy: {
            args: Prisma.hashtagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HashtagsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.hashtagsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.hashtagsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.hashtagsCountArgs<ExtArgs>
            result: $Utils.Optional<HashtagsCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.projectsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.projectsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      skills: {
        payload: Prisma.$skillsPayload<ExtArgs>
        fields: Prisma.skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findFirst: {
            args: Prisma.skillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findMany: {
            args: Prisma.skillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          create: {
            args: Prisma.skillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          createMany: {
            args: Prisma.skillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          update: {
            args: Prisma.skillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          deleteMany: {
            args: Prisma.skillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.skillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.skillsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.skillsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.skillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.jobsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.jobsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      testimonials: {
        payload: Prisma.$testimonialsPayload<ExtArgs>
        fields: Prisma.testimonialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testimonialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testimonialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          findFirst: {
            args: Prisma.testimonialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testimonialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          findMany: {
            args: Prisma.testimonialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>[]
          }
          create: {
            args: Prisma.testimonialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          createMany: {
            args: Prisma.testimonialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.testimonialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          update: {
            args: Prisma.testimonialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          deleteMany: {
            args: Prisma.testimonialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testimonialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.testimonialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testimonialsPayload>
          }
          aggregate: {
            args: Prisma.TestimonialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonials>
          }
          groupBy: {
            args: Prisma.testimonialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.testimonialsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.testimonialsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.testimonialsCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
   * Model BlogsAuts
   */





  export type BlogsAutsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    img?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["blogsAuts"]>


  export type BlogsAutsSelectScalar = {
    img?: boolean
    name?: boolean
    email?: boolean
  }


  export type $BlogsAutsPayload = {
    name: "BlogsAuts"
    objects: {}
    scalars: {
      img: string
      name: string
      email: string
    }
    composites: {}
  }

  type BlogsAutsGetPayload<S extends boolean | null | undefined | BlogsAutsDefaultArgs> = $Result.GetResult<Prisma.$BlogsAutsPayload, S>





  /**
   * Fields of the BlogsAuts model
   */ 
  interface BlogsAutsFieldRefs {
    readonly img: FieldRef<"BlogsAuts", 'String'>
    readonly name: FieldRef<"BlogsAuts", 'String'>
    readonly email: FieldRef<"BlogsAuts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogsAuts without action
   */
  export type BlogsAutsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogsAuts
     */
    select?: BlogsAutsSelect<ExtArgs> | null
  }


  /**
   * Model BlogsImg
   */





  export type BlogsImgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alt?: boolean
    src?: boolean
  }, ExtArgs["result"]["blogsImg"]>


  export type BlogsImgSelectScalar = {
    alt?: boolean
    src?: boolean
  }


  export type $BlogsImgPayload = {
    name: "BlogsImg"
    objects: {}
    scalars: {
      alt: string
      src: string
    }
    composites: {}
  }

  type BlogsImgGetPayload<S extends boolean | null | undefined | BlogsImgDefaultArgs> = $Result.GetResult<Prisma.$BlogsImgPayload, S>





  /**
   * Fields of the BlogsImg model
   */ 
  interface BlogsImgFieldRefs {
    readonly alt: FieldRef<"BlogsImg", 'String'>
    readonly src: FieldRef<"BlogsImg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogsImg without action
   */
  export type BlogsImgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogsImg
     */
    select?: BlogsImgSelect<ExtArgs> | null
  }


  /**
   * Model CommentsReactions
   */





  export type CommentsReactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reaction?: boolean
    by?: boolean
  }, ExtArgs["result"]["commentsReactions"]>


  export type CommentsReactionsSelectScalar = {
    reaction?: boolean
    by?: boolean
  }


  export type $CommentsReactionsPayload = {
    name: "CommentsReactions"
    objects: {}
    scalars: {
      reaction: string
      by: number
    }
    composites: {}
  }

  type CommentsReactionsGetPayload<S extends boolean | null | undefined | CommentsReactionsDefaultArgs> = $Result.GetResult<Prisma.$CommentsReactionsPayload, S>





  /**
   * Fields of the CommentsReactions model
   */ 
  interface CommentsReactionsFieldRefs {
    readonly reaction: FieldRef<"CommentsReactions", 'String'>
    readonly by: FieldRef<"CommentsReactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CommentsReactions without action
   */
  export type CommentsReactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsReactions
     */
    select?: CommentsReactionsSelect<ExtArgs> | null
  }


  /**
   * Model CommentsComments
   */





  export type CommentsCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    date?: boolean
    id_user?: boolean
    reactions?: boolean | CommentsReactionsDefaultArgs<ExtArgs>
    response?: boolean | CommentsCommentsResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentsComments"]>


  export type CommentsCommentsSelectScalar = {
    id?: boolean
    comment?: boolean
    date?: boolean
    id_user?: boolean
  }

  export type CommentsCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommentsCommentsPayload = {
    name: "CommentsComments"
    objects: {}
    scalars: {
      id: string
      comment: string
      date: Date
      id_user: number
    }
    composites: {
      reactions: Prisma.$CommentsReactionsPayload[]
      response: Prisma.$CommentsCommentsResponsePayload | null
    }
  }

  type CommentsCommentsGetPayload<S extends boolean | null | undefined | CommentsCommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsCommentsPayload, S>





  /**
   * Fields of the CommentsComments model
   */ 
  interface CommentsCommentsFieldRefs {
    readonly id: FieldRef<"CommentsComments", 'String'>
    readonly comment: FieldRef<"CommentsComments", 'String'>
    readonly date: FieldRef<"CommentsComments", 'DateTime'>
    readonly id_user: FieldRef<"CommentsComments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CommentsComments without action
   */
  export type CommentsCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsComments
     */
    select?: CommentsCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsCommentsInclude<ExtArgs> | null
  }


  /**
   * Model CommentsCommentsResponse
   */





  export type CommentsCommentsResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["commentsCommentsResponse"]>


  export type CommentsCommentsResponseSelectScalar = {
    id?: boolean
  }


  export type $CommentsCommentsResponsePayload = {
    name: "CommentsCommentsResponse"
    objects: {}
    scalars: {
      id: string
    }
    composites: {}
  }

  type CommentsCommentsResponseGetPayload<S extends boolean | null | undefined | CommentsCommentsResponseDefaultArgs> = $Result.GetResult<Prisma.$CommentsCommentsResponsePayload, S>





  /**
   * Fields of the CommentsCommentsResponse model
   */ 
  interface CommentsCommentsResponseFieldRefs {
    readonly id: FieldRef<"CommentsCommentsResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommentsCommentsResponse without action
   */
  export type CommentsCommentsResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCommentsResponse
     */
    select?: CommentsCommentsResponseSelect<ExtArgs> | null
  }


  /**
   * Model ProjectsMoreDescription
   */





  export type ProjectsMoreDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    children?: boolean
    container_style?: boolean
  }, ExtArgs["result"]["projectsMoreDescription"]>


  export type ProjectsMoreDescriptionSelectScalar = {
    children?: boolean
    container_style?: boolean
  }


  export type $ProjectsMoreDescriptionPayload = {
    name: "ProjectsMoreDescription"
    objects: {}
    scalars: {
      children: Prisma.JsonValue
      container_style: Prisma.JsonValue
    }
    composites: {}
  }

  type ProjectsMoreDescriptionGetPayload<S extends boolean | null | undefined | ProjectsMoreDescriptionDefaultArgs> = $Result.GetResult<Prisma.$ProjectsMoreDescriptionPayload, S>





  /**
   * Fields of the ProjectsMoreDescription model
   */ 
  interface ProjectsMoreDescriptionFieldRefs {
    readonly children: FieldRef<"ProjectsMoreDescription", 'Json'>
    readonly container_style: FieldRef<"ProjectsMoreDescription", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProjectsMoreDescription without action
   */
  export type ProjectsMoreDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsMoreDescription
     */
    select?: ProjectsMoreDescriptionSelect<ExtArgs> | null
  }


  /**
   * Model ProjectsImage
   */





  export type ProjectsImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url?: boolean
    size?: boolean
    position?: boolean
  }, ExtArgs["result"]["projectsImage"]>


  export type ProjectsImageSelectScalar = {
    url?: boolean
    size?: boolean
    position?: boolean
  }


  export type $ProjectsImagePayload = {
    name: "ProjectsImage"
    objects: {}
    scalars: {
      url: string
      size: string
      position: string
    }
    composites: {}
  }

  type ProjectsImageGetPayload<S extends boolean | null | undefined | ProjectsImageDefaultArgs> = $Result.GetResult<Prisma.$ProjectsImagePayload, S>





  /**
   * Fields of the ProjectsImage model
   */ 
  interface ProjectsImageFieldRefs {
    readonly url: FieldRef<"ProjectsImage", 'String'>
    readonly size: FieldRef<"ProjectsImage", 'String'>
    readonly position: FieldRef<"ProjectsImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectsImage without action
   */
  export type ProjectsImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsImage
     */
    select?: ProjectsImageSelect<ExtArgs> | null
  }


  /**
   * Model ProjectsTitle
   */





  export type ProjectsTitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    color?: boolean
    font?: boolean | ProjectsTitleFontDefaultArgs<ExtArgs>
    value?: boolean
  }, ExtArgs["result"]["projectsTitle"]>


  export type ProjectsTitleSelectScalar = {
    color?: boolean
    value?: boolean
  }

  export type ProjectsTitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectsTitlePayload = {
    name: "ProjectsTitle"
    objects: {}
    scalars: {
      color: string
      value: Prisma.JsonValue
    }
    composites: {
      font: Prisma.$ProjectsTitleFontPayload
    }
  }

  type ProjectsTitleGetPayload<S extends boolean | null | undefined | ProjectsTitleDefaultArgs> = $Result.GetResult<Prisma.$ProjectsTitlePayload, S>





  /**
   * Fields of the ProjectsTitle model
   */ 
  interface ProjectsTitleFieldRefs {
    readonly color: FieldRef<"ProjectsTitle", 'String'>
    readonly value: FieldRef<"ProjectsTitle", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProjectsTitle without action
   */
  export type ProjectsTitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsTitle
     */
    select?: ProjectsTitleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsTitleInclude<ExtArgs> | null
  }


  /**
   * Model ProjectsTitleFont
   */





  export type ProjectsTitleFontSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ff?: boolean
    fs?: boolean
    fw?: boolean
    link?: boolean
  }, ExtArgs["result"]["projectsTitleFont"]>


  export type ProjectsTitleFontSelectScalar = {
    ff?: boolean
    fs?: boolean
    fw?: boolean
    link?: boolean
  }


  export type $ProjectsTitleFontPayload = {
    name: "ProjectsTitleFont"
    objects: {}
    scalars: {
      ff: string
      fs: number
      fw: number
      link: string
    }
    composites: {}
  }

  type ProjectsTitleFontGetPayload<S extends boolean | null | undefined | ProjectsTitleFontDefaultArgs> = $Result.GetResult<Prisma.$ProjectsTitleFontPayload, S>





  /**
   * Fields of the ProjectsTitleFont model
   */ 
  interface ProjectsTitleFontFieldRefs {
    readonly ff: FieldRef<"ProjectsTitleFont", 'String'>
    readonly fs: FieldRef<"ProjectsTitleFont", 'Int'>
    readonly fw: FieldRef<"ProjectsTitleFont", 'Int'>
    readonly link: FieldRef<"ProjectsTitleFont", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectsTitleFont without action
   */
  export type ProjectsTitleFontDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsTitleFont
     */
    select?: ProjectsTitleFontSelect<ExtArgs> | null
  }


  /**
   * Model JobsDate
   */





  export type JobsDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    end?: boolean
    start?: boolean
  }, ExtArgs["result"]["jobsDate"]>


  export type JobsDateSelectScalar = {
    end?: boolean
    start?: boolean
  }


  export type $JobsDatePayload = {
    name: "JobsDate"
    objects: {}
    scalars: {
      end: string
      start: string
    }
    composites: {}
  }

  type JobsDateGetPayload<S extends boolean | null | undefined | JobsDateDefaultArgs> = $Result.GetResult<Prisma.$JobsDatePayload, S>





  /**
   * Fields of the JobsDate model
   */ 
  interface JobsDateFieldRefs {
    readonly end: FieldRef<"JobsDate", 'String'>
    readonly start: FieldRef<"JobsDate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobsDate without action
   */
  export type JobsDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobsDate
     */
    select?: JobsDateSelect<ExtArgs> | null
  }


  /**
   * Model JobsMedia
   */





  export type JobsMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alt?: boolean
    link?: boolean
    size?: boolean
    src?: boolean
  }, ExtArgs["result"]["jobsMedia"]>


  export type JobsMediaSelectScalar = {
    alt?: boolean
    link?: boolean
    size?: boolean
    src?: boolean
  }


  export type $JobsMediaPayload = {
    name: "JobsMedia"
    objects: {}
    scalars: {
      alt: string
      link: string
      size: string[]
      src: string
    }
    composites: {}
  }

  type JobsMediaGetPayload<S extends boolean | null | undefined | JobsMediaDefaultArgs> = $Result.GetResult<Prisma.$JobsMediaPayload, S>





  /**
   * Fields of the JobsMedia model
   */ 
  interface JobsMediaFieldRefs {
    readonly alt: FieldRef<"JobsMedia", 'String'>
    readonly link: FieldRef<"JobsMedia", 'String'>
    readonly size: FieldRef<"JobsMedia", 'String[]'>
    readonly src: FieldRef<"JobsMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobsMedia without action
   */
  export type JobsMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobsMedia
     */
    select?: JobsMediaSelect<ExtArgs> | null
  }


  /**
   * Model blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  export type BlogsAvgAggregateOutputType = {
    hashtags: number | null
  }

  export type BlogsSumAggregateOutputType = {
    hashtags: number[]
  }

  export type BlogsMinAggregateOutputType = {
    id: string | null
    actif: boolean | null
    date: Date | null
    link: string | null
    visible: boolean | null
  }

  export type BlogsMaxAggregateOutputType = {
    id: string | null
    actif: boolean | null
    date: Date | null
    link: string | null
    visible: boolean | null
  }

  export type BlogsCountAggregateOutputType = {
    id: number
    actif: number
    content: number
    date: number
    hashtags: number
    link: number
    title: number
    visible: number
    _all: number
  }


  export type BlogsAvgAggregateInputType = {
    hashtags?: true
  }

  export type BlogsSumAggregateInputType = {
    hashtags?: true
  }

  export type BlogsMinAggregateInputType = {
    id?: true
    actif?: true
    date?: true
    link?: true
    visible?: true
  }

  export type BlogsMaxAggregateInputType = {
    id?: true
    actif?: true
    date?: true
    link?: true
    visible?: true
  }

  export type BlogsCountAggregateInputType = {
    id?: true
    actif?: true
    content?: true
    date?: true
    hashtags?: true
    link?: true
    title?: true
    visible?: true
    _all?: true
  }

  export type BlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to aggregate.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogs
    **/
    _count?: true | BlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogsMaxAggregateInputType
  }

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>
  }




  export type blogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogsWhereInput
    orderBy?: blogsOrderByWithAggregationInput | blogsOrderByWithAggregationInput[]
    by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum
    having?: blogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogsCountAggregateInputType | true
    _avg?: BlogsAvgAggregateInputType
    _sum?: BlogsSumAggregateInputType
    _min?: BlogsMinAggregateInputType
    _max?: BlogsMaxAggregateInputType
  }

  export type BlogsGroupByOutputType = {
    id: string
    actif: boolean
    content: JsonValue
    date: Date
    hashtags: number[]
    link: string
    title: JsonValue
    visible: boolean
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  type GetBlogsGroupByPayload<T extends blogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
        }
      >
    >


  export type blogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actif?: boolean
    auts?: boolean | BlogsAutsDefaultArgs<ExtArgs>
    content?: boolean
    date?: boolean
    hashtags?: boolean
    img?: boolean | BlogsImgDefaultArgs<ExtArgs>
    link?: boolean
    title?: boolean
    visible?: boolean
  }, ExtArgs["result"]["blogs"]>


  export type blogsSelectScalar = {
    id?: boolean
    actif?: boolean
    content?: boolean
    date?: boolean
    hashtags?: boolean
    link?: boolean
    title?: boolean
    visible?: boolean
  }

  export type blogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $blogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blogs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actif: boolean
      content: Prisma.JsonValue
      date: Date
      hashtags: number[]
      link: string
      title: Prisma.JsonValue
      visible: boolean
    }, ExtArgs["result"]["blogs"]>
    composites: {
      auts: Prisma.$BlogsAutsPayload[]
      img: Prisma.$BlogsImgPayload
    }
  }

  type blogsGetPayload<S extends boolean | null | undefined | blogsDefaultArgs> = $Result.GetResult<Prisma.$blogsPayload, S>

  type blogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<blogsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogsCountAggregateInputType | true
    }

  export interface blogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogs'], meta: { name: 'blogs' } }
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {blogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blogsFindUniqueArgs>(args: SelectSubset<T, blogsFindUniqueArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Blogs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {blogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blogsFindUniqueOrThrowArgs>(args: SelectSubset<T, blogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blogsFindFirstArgs>(args?: SelectSubset<T, blogsFindFirstArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blogsFindFirstOrThrowArgs>(args?: SelectSubset<T, blogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogsWithIdOnly = await prisma.blogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blogsFindManyArgs>(args?: SelectSubset<T, blogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Blogs.
     * @param {blogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     * 
     */
    create<T extends blogsCreateArgs>(args: SelectSubset<T, blogsCreateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Blogs.
     * @param {blogsCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blogsCreateManyArgs>(args?: SelectSubset<T, blogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blogs.
     * @param {blogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     * 
     */
    delete<T extends blogsDeleteArgs>(args: SelectSubset<T, blogsDeleteArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Blogs.
     * @param {blogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blogsUpdateArgs>(args: SelectSubset<T, blogsUpdateArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {blogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blogsDeleteManyArgs>(args?: SelectSubset<T, blogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blogsUpdateManyArgs>(args: SelectSubset<T, blogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blogs.
     * @param {blogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     */
    upsert<T extends blogsUpsertArgs>(args: SelectSubset<T, blogsUpsertArgs<ExtArgs>>): Prisma__blogsClient<$Result.GetResult<Prisma.$blogsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * @param {blogsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const blogs = await prisma.blogs.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: blogsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Blogs.
     * @param {blogsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const blogs = await prisma.blogs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: blogsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends blogsCountArgs>(
      args?: Subset<T, blogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogsAggregateArgs>(args: Subset<T, BlogsAggregateArgs>): Prisma.PrismaPromise<GetBlogsAggregateType<T>>

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogsGroupByArgs} args - Group by arguments.
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
      T extends blogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogsGroupByArgs['orderBy'] }
        : { orderBy?: blogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, blogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blogs model
   */
  readonly fields: blogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the blogs model
   */ 
  interface blogsFieldRefs {
    readonly id: FieldRef<"blogs", 'String'>
    readonly actif: FieldRef<"blogs", 'Boolean'>
    readonly content: FieldRef<"blogs", 'Json'>
    readonly date: FieldRef<"blogs", 'DateTime'>
    readonly hashtags: FieldRef<"blogs", 'Int[]'>
    readonly link: FieldRef<"blogs", 'String'>
    readonly title: FieldRef<"blogs", 'Json'>
    readonly visible: FieldRef<"blogs", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * blogs findUnique
   */
  export type blogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findUniqueOrThrow
   */
  export type blogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs findFirst
   */
  export type blogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findFirstOrThrow
   */
  export type blogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs findMany
   */
  export type blogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogsOrderByWithRelationInput | blogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogs.
     */
    cursor?: blogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * blogs create
   */
  export type blogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The data needed to create a blogs.
     */
    data: XOR<blogsCreateInput, blogsUncheckedCreateInput>
  }

  /**
   * blogs createMany
   */
  export type blogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogs.
     */
    data: blogsCreateManyInput | blogsCreateManyInput[]
  }

  /**
   * blogs update
   */
  export type blogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The data needed to update a blogs.
     */
    data: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
    /**
     * Choose, which blogs to update.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs updateMany
   */
  export type blogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogs.
     */
    data: XOR<blogsUpdateManyMutationInput, blogsUncheckedUpdateManyInput>
    /**
     * Filter which blogs to update
     */
    where?: blogsWhereInput
  }

  /**
   * blogs upsert
   */
  export type blogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * The filter to search for the blogs to update in case it exists.
     */
    where: blogsWhereUniqueInput
    /**
     * In case the blogs found by the `where` argument doesn't exist, create a new blogs with this data.
     */
    create: XOR<blogsCreateInput, blogsUncheckedCreateInput>
    /**
     * In case the blogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogsUpdateInput, blogsUncheckedUpdateInput>
  }

  /**
   * blogs delete
   */
  export type blogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
    /**
     * Filter which blogs to delete.
     */
    where: blogsWhereUniqueInput
  }

  /**
   * blogs deleteMany
   */
  export type blogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to delete
     */
    where?: blogsWhereInput
  }

  /**
   * blogs findRaw
   */
  export type blogsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * blogs aggregateRaw
   */
  export type blogsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * blogs without action
   */
  export type blogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogs
     */
    select?: blogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogsInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    nbr_comments: number | null
  }

  export type CommentsSumAggregateOutputType = {
    nbr_comments: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    id_blog: string | null
    blog: string | null
    nbr_comments: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    id_blog: string | null
    blog: string | null
    nbr_comments: number | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    id_blog: number
    blog: number
    nbr_comments: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    nbr_comments?: true
  }

  export type CommentsSumAggregateInputType = {
    nbr_comments?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    id_blog?: true
    blog?: true
    nbr_comments?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    id_blog?: true
    blog?: true
    nbr_comments?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    id_blog?: true
    blog?: true
    nbr_comments?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    id_blog: string
    blog: string
    nbr_comments: number
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_blog?: boolean
    blog?: boolean
    comments?: boolean | CommentsCommentsDefaultArgs<ExtArgs>
    nbr_comments?: boolean
  }, ExtArgs["result"]["comments"]>


  export type commentsSelectScalar = {
    id?: boolean
    id_blog?: boolean
    blog?: boolean
    nbr_comments?: boolean
  }

  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_blog: string
      blog: string
      nbr_comments: number
    }, ExtArgs["result"]["comments"]>
    composites: {
      comments: Prisma.$CommentsCommentsPayload[]
    }
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {commentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comments = await prisma.comments.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: commentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comments.
     * @param {commentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comments = await prisma.comments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: commentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the comments model
   */ 
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'String'>
    readonly id_blog: FieldRef<"comments", 'String'>
    readonly blog: FieldRef<"comments", 'String'>
    readonly nbr_comments: FieldRef<"comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
  }

  /**
   * comments findRaw
   */
  export type commentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * comments aggregateRaw
   */
  export type commentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model hashtags
   */

  export type AggregateHashtags = {
    _count: HashtagsCountAggregateOutputType | null
    _avg: HashtagsAvgAggregateOutputType | null
    _sum: HashtagsSumAggregateOutputType | null
    _min: HashtagsMinAggregateOutputType | null
    _max: HashtagsMaxAggregateOutputType | null
  }

  export type HashtagsAvgAggregateOutputType = {
    key: number | null
  }

  export type HashtagsSumAggregateOutputType = {
    key: number | null
  }

  export type HashtagsMinAggregateOutputType = {
    id: string | null
    color: string | null
    hashtag: string | null
    key: number | null
  }

  export type HashtagsMaxAggregateOutputType = {
    id: string | null
    color: string | null
    hashtag: string | null
    key: number | null
  }

  export type HashtagsCountAggregateOutputType = {
    id: number
    color: number
    hashtag: number
    key: number
    _all: number
  }


  export type HashtagsAvgAggregateInputType = {
    key?: true
  }

  export type HashtagsSumAggregateInputType = {
    key?: true
  }

  export type HashtagsMinAggregateInputType = {
    id?: true
    color?: true
    hashtag?: true
    key?: true
  }

  export type HashtagsMaxAggregateInputType = {
    id?: true
    color?: true
    hashtag?: true
    key?: true
  }

  export type HashtagsCountAggregateInputType = {
    id?: true
    color?: true
    hashtag?: true
    key?: true
    _all?: true
  }

  export type HashtagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hashtags to aggregate.
     */
    where?: hashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagsOrderByWithRelationInput | hashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hashtags
    **/
    _count?: true | HashtagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashtagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashtagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagsMaxAggregateInputType
  }

  export type GetHashtagsAggregateType<T extends HashtagsAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtags[P]>
      : GetScalarType<T[P], AggregateHashtags[P]>
  }




  export type hashtagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hashtagsWhereInput
    orderBy?: hashtagsOrderByWithAggregationInput | hashtagsOrderByWithAggregationInput[]
    by: HashtagsScalarFieldEnum[] | HashtagsScalarFieldEnum
    having?: hashtagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagsCountAggregateInputType | true
    _avg?: HashtagsAvgAggregateInputType
    _sum?: HashtagsSumAggregateInputType
    _min?: HashtagsMinAggregateInputType
    _max?: HashtagsMaxAggregateInputType
  }

  export type HashtagsGroupByOutputType = {
    id: string
    color: string
    hashtag: string
    key: number
    _count: HashtagsCountAggregateOutputType | null
    _avg: HashtagsAvgAggregateOutputType | null
    _sum: HashtagsSumAggregateOutputType | null
    _min: HashtagsMinAggregateOutputType | null
    _max: HashtagsMaxAggregateOutputType | null
  }

  type GetHashtagsGroupByPayload<T extends hashtagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagsGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagsGroupByOutputType[P]>
        }
      >
    >


  export type hashtagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    hashtag?: boolean
    key?: boolean
  }, ExtArgs["result"]["hashtags"]>


  export type hashtagsSelectScalar = {
    id?: boolean
    color?: boolean
    hashtag?: boolean
    key?: boolean
  }


  export type $hashtagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hashtags"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      color: string
      hashtag: string
      key: number
    }, ExtArgs["result"]["hashtags"]>
    composites: {}
  }

  type hashtagsGetPayload<S extends boolean | null | undefined | hashtagsDefaultArgs> = $Result.GetResult<Prisma.$hashtagsPayload, S>

  type hashtagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<hashtagsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HashtagsCountAggregateInputType | true
    }

  export interface hashtagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hashtags'], meta: { name: 'hashtags' } }
    /**
     * Find zero or one Hashtags that matches the filter.
     * @param {hashtagsFindUniqueArgs} args - Arguments to find a Hashtags
     * @example
     * // Get one Hashtags
     * const hashtags = await prisma.hashtags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hashtagsFindUniqueArgs>(args: SelectSubset<T, hashtagsFindUniqueArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hashtags that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {hashtagsFindUniqueOrThrowArgs} args - Arguments to find a Hashtags
     * @example
     * // Get one Hashtags
     * const hashtags = await prisma.hashtags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hashtagsFindUniqueOrThrowArgs>(args: SelectSubset<T, hashtagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagsFindFirstArgs} args - Arguments to find a Hashtags
     * @example
     * // Get one Hashtags
     * const hashtags = await prisma.hashtags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hashtagsFindFirstArgs>(args?: SelectSubset<T, hashtagsFindFirstArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hashtags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagsFindFirstOrThrowArgs} args - Arguments to find a Hashtags
     * @example
     * // Get one Hashtags
     * const hashtags = await prisma.hashtags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hashtagsFindFirstOrThrowArgs>(args?: SelectSubset<T, hashtagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtags.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagsWithIdOnly = await prisma.hashtags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hashtagsFindManyArgs>(args?: SelectSubset<T, hashtagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hashtags.
     * @param {hashtagsCreateArgs} args - Arguments to create a Hashtags.
     * @example
     * // Create one Hashtags
     * const Hashtags = await prisma.hashtags.create({
     *   data: {
     *     // ... data to create a Hashtags
     *   }
     * })
     * 
     */
    create<T extends hashtagsCreateArgs>(args: SelectSubset<T, hashtagsCreateArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hashtags.
     * @param {hashtagsCreateManyArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtags = await prisma.hashtags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hashtagsCreateManyArgs>(args?: SelectSubset<T, hashtagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hashtags.
     * @param {hashtagsDeleteArgs} args - Arguments to delete one Hashtags.
     * @example
     * // Delete one Hashtags
     * const Hashtags = await prisma.hashtags.delete({
     *   where: {
     *     // ... filter to delete one Hashtags
     *   }
     * })
     * 
     */
    delete<T extends hashtagsDeleteArgs>(args: SelectSubset<T, hashtagsDeleteArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hashtags.
     * @param {hashtagsUpdateArgs} args - Arguments to update one Hashtags.
     * @example
     * // Update one Hashtags
     * const hashtags = await prisma.hashtags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hashtagsUpdateArgs>(args: SelectSubset<T, hashtagsUpdateArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hashtags.
     * @param {hashtagsDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hashtagsDeleteManyArgs>(args?: SelectSubset<T, hashtagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtags = await prisma.hashtags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hashtagsUpdateManyArgs>(args: SelectSubset<T, hashtagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hashtags.
     * @param {hashtagsUpsertArgs} args - Arguments to update or create a Hashtags.
     * @example
     * // Update or create a Hashtags
     * const hashtags = await prisma.hashtags.upsert({
     *   create: {
     *     // ... data to create a Hashtags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtags we want to update
     *   }
     * })
     */
    upsert<T extends hashtagsUpsertArgs>(args: SelectSubset<T, hashtagsUpsertArgs<ExtArgs>>): Prisma__hashtagsClient<$Result.GetResult<Prisma.$hashtagsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Hashtags that matches the filter.
     * @param {hashtagsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hashtags = await prisma.hashtags.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: hashtagsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Hashtags.
     * @param {hashtagsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hashtags = await prisma.hashtags.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: hashtagsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagsCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtags.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends hashtagsCountArgs>(
      args?: Subset<T, hashtagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashtagsAggregateArgs>(args: Subset<T, HashtagsAggregateArgs>): Prisma.PrismaPromise<GetHashtagsAggregateType<T>>

    /**
     * Group by Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hashtagsGroupByArgs} args - Group by arguments.
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
      T extends hashtagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hashtagsGroupByArgs['orderBy'] }
        : { orderBy?: hashtagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hashtagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hashtags model
   */
  readonly fields: hashtagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hashtags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hashtagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the hashtags model
   */ 
  interface hashtagsFieldRefs {
    readonly id: FieldRef<"hashtags", 'String'>
    readonly color: FieldRef<"hashtags", 'String'>
    readonly hashtag: FieldRef<"hashtags", 'String'>
    readonly key: FieldRef<"hashtags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hashtags findUnique
   */
  export type hashtagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * Filter, which hashtags to fetch.
     */
    where: hashtagsWhereUniqueInput
  }

  /**
   * hashtags findUniqueOrThrow
   */
  export type hashtagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * Filter, which hashtags to fetch.
     */
    where: hashtagsWhereUniqueInput
  }

  /**
   * hashtags findFirst
   */
  export type hashtagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * Filter, which hashtags to fetch.
     */
    where?: hashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagsOrderByWithRelationInput | hashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hashtags.
     */
    cursor?: hashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hashtags.
     */
    distinct?: HashtagsScalarFieldEnum | HashtagsScalarFieldEnum[]
  }

  /**
   * hashtags findFirstOrThrow
   */
  export type hashtagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * Filter, which hashtags to fetch.
     */
    where?: hashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagsOrderByWithRelationInput | hashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hashtags.
     */
    cursor?: hashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hashtags.
     */
    distinct?: HashtagsScalarFieldEnum | HashtagsScalarFieldEnum[]
  }

  /**
   * hashtags findMany
   */
  export type hashtagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * Filter, which hashtags to fetch.
     */
    where?: hashtagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hashtags to fetch.
     */
    orderBy?: hashtagsOrderByWithRelationInput | hashtagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hashtags.
     */
    cursor?: hashtagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hashtags.
     */
    skip?: number
    distinct?: HashtagsScalarFieldEnum | HashtagsScalarFieldEnum[]
  }

  /**
   * hashtags create
   */
  export type hashtagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * The data needed to create a hashtags.
     */
    data: XOR<hashtagsCreateInput, hashtagsUncheckedCreateInput>
  }

  /**
   * hashtags createMany
   */
  export type hashtagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hashtags.
     */
    data: hashtagsCreateManyInput | hashtagsCreateManyInput[]
  }

  /**
   * hashtags update
   */
  export type hashtagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * The data needed to update a hashtags.
     */
    data: XOR<hashtagsUpdateInput, hashtagsUncheckedUpdateInput>
    /**
     * Choose, which hashtags to update.
     */
    where: hashtagsWhereUniqueInput
  }

  /**
   * hashtags updateMany
   */
  export type hashtagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hashtags.
     */
    data: XOR<hashtagsUpdateManyMutationInput, hashtagsUncheckedUpdateManyInput>
    /**
     * Filter which hashtags to update
     */
    where?: hashtagsWhereInput
  }

  /**
   * hashtags upsert
   */
  export type hashtagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * The filter to search for the hashtags to update in case it exists.
     */
    where: hashtagsWhereUniqueInput
    /**
     * In case the hashtags found by the `where` argument doesn't exist, create a new hashtags with this data.
     */
    create: XOR<hashtagsCreateInput, hashtagsUncheckedCreateInput>
    /**
     * In case the hashtags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hashtagsUpdateInput, hashtagsUncheckedUpdateInput>
  }

  /**
   * hashtags delete
   */
  export type hashtagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
    /**
     * Filter which hashtags to delete.
     */
    where: hashtagsWhereUniqueInput
  }

  /**
   * hashtags deleteMany
   */
  export type hashtagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hashtags to delete
     */
    where?: hashtagsWhereInput
  }

  /**
   * hashtags findRaw
   */
  export type hashtagsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * hashtags aggregateRaw
   */
  export type hashtagsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * hashtags without action
   */
  export type hashtagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hashtags
     */
    select?: hashtagsSelect<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    ordre: number | null
    area: number | null
    hashtags: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    ordre: number | null
    area: number[]
    hashtags: number[]
  }

  export type ProjectsMinAggregateOutputType = {
    ordre: number | null
    id: string | null
    blog: string | null
    link: string | null
    status: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    ordre: number | null
    id: string | null
    blog: string | null
    link: string | null
    status: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    ordre: number
    id: number
    area: number
    blog: number
    description: number
    hashtags: number
    link: number
    status: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    ordre?: true
    area?: true
    hashtags?: true
  }

  export type ProjectsSumAggregateInputType = {
    ordre?: true
    area?: true
    hashtags?: true
  }

  export type ProjectsMinAggregateInputType = {
    ordre?: true
    id?: true
    blog?: true
    link?: true
    status?: true
  }

  export type ProjectsMaxAggregateInputType = {
    ordre?: true
    id?: true
    blog?: true
    link?: true
    status?: true
  }

  export type ProjectsCountAggregateInputType = {
    ordre?: true
    id?: true
    area?: true
    blog?: true
    description?: true
    hashtags?: true
    link?: true
    status?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    ordre: number
    id: string
    area: number[]
    blog: string
    description: JsonValue
    hashtags: number[]
    link: string | null
    status: string
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ordre?: boolean
    id?: boolean
    area?: boolean
    blog?: boolean
    description?: boolean
    hashtags?: boolean
    image?: boolean | ProjectsImageDefaultArgs<ExtArgs>
    link?: boolean
    moreDescription?: boolean | ProjectsMoreDescriptionDefaultArgs<ExtArgs>
    status?: boolean
    title?: boolean | ProjectsTitleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>


  export type projectsSelectScalar = {
    ordre?: boolean
    id?: boolean
    area?: boolean
    blog?: boolean
    description?: boolean
    hashtags?: boolean
    link?: boolean
    status?: boolean
  }

  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ordre: number
      id: string
      area: number[]
      blog: string
      description: Prisma.JsonValue
      hashtags: number[]
      link: string | null
      status: string
    }, ExtArgs["result"]["projects"]>
    composites: {
      image: Prisma.$ProjectsImagePayload
      moreDescription: Prisma.$ProjectsMoreDescriptionPayload | null
      title: Prisma.$ProjectsTitlePayload
    }
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `ordre`
     * const projectsWithOrdreOnly = await prisma.projects.findMany({ select: { ordre: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {projectsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const projects = await prisma.projects.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: projectsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Projects.
     * @param {projectsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const projects = await prisma.projects.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: projectsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the projects model
   */ 
  interface projectsFieldRefs {
    readonly ordre: FieldRef<"projects", 'Int'>
    readonly id: FieldRef<"projects", 'String'>
    readonly area: FieldRef<"projects", 'Int[]'>
    readonly blog: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'Json'>
    readonly hashtags: FieldRef<"projects", 'Int[]'>
    readonly link: FieldRef<"projects", 'String'>
    readonly status: FieldRef<"projects", 'String'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
  }

  /**
   * projects findRaw
   */
  export type projectsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * projects aggregateRaw
   */
  export type projectsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    exp: number | null
  }

  export type SkillsSumAggregateOutputType = {
    exp: number | null
  }

  export type SkillsMinAggregateOutputType = {
    id: string | null
    technology: string | null
    fill: string | null
    id_domaine: string | null
    img: string | null
    svg: string | null
    exp: number | null
    type: string | null
    order: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: string | null
    technology: string | null
    fill: string | null
    id_domaine: string | null
    img: string | null
    svg: string | null
    exp: number | null
    type: string | null
    order: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    technology: number
    domaine: number
    fill: number
    id_domaine: number
    img: number
    svg: number
    exp: number
    type: number
    order: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    exp?: true
  }

  export type SkillsSumAggregateInputType = {
    exp?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    technology?: true
    fill?: true
    id_domaine?: true
    img?: true
    svg?: true
    exp?: true
    type?: true
    order?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    technology?: true
    fill?: true
    id_domaine?: true
    img?: true
    svg?: true
    exp?: true
    type?: true
    order?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    technology?: true
    domaine?: true
    fill?: true
    id_domaine?: true
    img?: true
    svg?: true
    exp?: true
    type?: true
    order?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to aggregate.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillsWhereInput
    orderBy?: skillsOrderByWithAggregationInput | skillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: string
    technology: string | null
    domaine: JsonValue | null
    fill: string | null
    id_domaine: string
    img: string | null
    svg: string | null
    exp: number | null
    type: string
    order: string
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technology?: boolean
    domaine?: boolean
    fill?: boolean
    id_domaine?: boolean
    img?: boolean
    svg?: boolean
    exp?: boolean
    type?: boolean
    order?: boolean
  }, ExtArgs["result"]["skills"]>


  export type skillsSelectScalar = {
    id?: boolean
    technology?: boolean
    domaine?: boolean
    fill?: boolean
    id_domaine?: boolean
    img?: boolean
    svg?: boolean
    exp?: boolean
    type?: boolean
    order?: boolean
  }


  export type $skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skills"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      technology: string | null
      domaine: Prisma.JsonValue | null
      fill: string | null
      id_domaine: string
      img: string | null
      svg: string | null
      exp: number | null
      type: string
      order: string
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type skillsGetPayload<S extends boolean | null | undefined | skillsDefaultArgs> = $Result.GetResult<Prisma.$skillsPayload, S>

  type skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<skillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skills'], meta: { name: 'skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {skillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillsFindUniqueArgs>(args: SelectSubset<T, skillsFindUniqueArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {skillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillsFindUniqueOrThrowArgs>(args: SelectSubset<T, skillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillsFindFirstArgs>(args?: SelectSubset<T, skillsFindFirstArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillsFindFirstOrThrowArgs>(args?: SelectSubset<T, skillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillsFindManyArgs>(args?: SelectSubset<T, skillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skills.
     * @param {skillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
     */
    create<T extends skillsCreateArgs>(args: SelectSubset<T, skillsCreateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skills.
     * @param {skillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillsCreateManyArgs>(args?: SelectSubset<T, skillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skills.
     * @param {skillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
     */
    delete<T extends skillsDeleteArgs>(args: SelectSubset<T, skillsDeleteArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skills.
     * @param {skillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillsUpdateArgs>(args: SelectSubset<T, skillsUpdateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {skillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillsDeleteManyArgs>(args?: SelectSubset<T, skillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillsUpdateManyArgs>(args: SelectSubset<T, skillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {skillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends skillsUpsertArgs>(args: SelectSubset<T, skillsUpsertArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * @param {skillsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const skills = await prisma.skills.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: skillsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Skills.
     * @param {skillsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const skills = await prisma.skills.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: skillsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillsCountArgs>(
      args?: Subset<T, skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsGroupByArgs} args - Group by arguments.
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
      T extends skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillsGroupByArgs['orderBy'] }
        : { orderBy?: skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skills model
   */
  readonly fields: skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the skills model
   */ 
  interface skillsFieldRefs {
    readonly id: FieldRef<"skills", 'String'>
    readonly technology: FieldRef<"skills", 'String'>
    readonly domaine: FieldRef<"skills", 'Json'>
    readonly fill: FieldRef<"skills", 'String'>
    readonly id_domaine: FieldRef<"skills", 'String'>
    readonly img: FieldRef<"skills", 'String'>
    readonly svg: FieldRef<"skills", 'String'>
    readonly exp: FieldRef<"skills", 'Int'>
    readonly type: FieldRef<"skills", 'String'>
    readonly order: FieldRef<"skills", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skills findUnique
   */
  export type skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findUniqueOrThrow
   */
  export type skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findFirst
   */
  export type skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findFirstOrThrow
   */
  export type skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findMany
   */
  export type skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills create
   */
  export type skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * The data needed to create a skills.
     */
    data: XOR<skillsCreateInput, skillsUncheckedCreateInput>
  }

  /**
   * skills createMany
   */
  export type skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
  }

  /**
   * skills update
   */
  export type skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * The data needed to update a skills.
     */
    data: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
    /**
     * Choose, which skills to update.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills updateMany
   */
  export type skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
  }

  /**
   * skills upsert
   */
  export type skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * The filter to search for the skills to update in case it exists.
     */
    where: skillsWhereUniqueInput
    /**
     * In case the skills found by the `where` argument doesn't exist, create a new skills with this data.
     */
    create: XOR<skillsCreateInput, skillsUncheckedCreateInput>
    /**
     * In case the skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
  }

  /**
   * skills delete
   */
  export type skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter which skills to delete.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills deleteMany
   */
  export type skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillsWhereInput
  }

  /**
   * skills findRaw
   */
  export type skillsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * skills aggregateRaw
   */
  export type skillsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * skills without action
   */
  export type skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    ordre: number | null
  }

  export type JobsSumAggregateOutputType = {
    ordre: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: string | null
    entreprise: string | null
    ordre: number | null
  }

  export type JobsMaxAggregateOutputType = {
    id: string | null
    entreprise: string | null
    ordre: number | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    description: number
    entreprise: number
    location: number
    ordre: number
    secteur: number
    title: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    ordre?: true
  }

  export type JobsSumAggregateInputType = {
    ordre?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    entreprise?: true
    ordre?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    entreprise?: true
    ordre?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    description?: true
    entreprise?: true
    location?: true
    ordre?: true
    secteur?: true
    title?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: string
    description: JsonValue
    entreprise: string
    location: JsonValue
    ordre: number
    secteur: JsonValue
    title: JsonValue
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean | JobsDateDefaultArgs<ExtArgs>
    description?: boolean
    entreprise?: boolean
    location?: boolean
    media?: boolean | JobsMediaDefaultArgs<ExtArgs>
    ordre?: boolean
    secteur?: boolean
    title?: boolean
  }, ExtArgs["result"]["jobs"]>


  export type jobsSelectScalar = {
    id?: boolean
    description?: boolean
    entreprise?: boolean
    location?: boolean
    ordre?: boolean
    secteur?: boolean
    title?: boolean
  }

  export type jobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: Prisma.JsonValue
      entreprise: string
      location: Prisma.JsonValue
      ordre: number
      secteur: Prisma.JsonValue
      title: Prisma.JsonValue
    }, ExtArgs["result"]["jobs"]>
    composites: {
      date: Prisma.$JobsDatePayload
      media: Prisma.$JobsMediaPayload
    }
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * @param {jobsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const jobs = await prisma.jobs.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: jobsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Jobs.
     * @param {jobsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const jobs = await prisma.jobs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: jobsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
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
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the jobs model
   */ 
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'String'>
    readonly description: FieldRef<"jobs", 'Json'>
    readonly entreprise: FieldRef<"jobs", 'String'>
    readonly location: FieldRef<"jobs", 'Json'>
    readonly ordre: FieldRef<"jobs", 'Int'>
    readonly secteur: FieldRef<"jobs", 'Json'>
    readonly title: FieldRef<"jobs", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
  }

  /**
   * jobs findRaw
   */
  export type jobsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * jobs aggregateRaw
   */
  export type jobsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
  }


  /**
   * Model testimonials
   */

  export type AggregateTestimonials = {
    _count: TestimonialsCountAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  export type TestimonialsMinAggregateOutputType = {
    id: string | null
    email: string | null
    img: string | null
    of: string | null
    profession: string | null
    say: string | null
  }

  export type TestimonialsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    img: string | null
    of: string | null
    profession: string | null
    say: string | null
  }

  export type TestimonialsCountAggregateOutputType = {
    id: number
    email: number
    img: number
    of: number
    profession: number
    say: number
    _all: number
  }


  export type TestimonialsMinAggregateInputType = {
    id?: true
    email?: true
    img?: true
    of?: true
    profession?: true
    say?: true
  }

  export type TestimonialsMaxAggregateInputType = {
    id?: true
    email?: true
    img?: true
    of?: true
    profession?: true
    say?: true
  }

  export type TestimonialsCountAggregateInputType = {
    id?: true
    email?: true
    img?: true
    of?: true
    profession?: true
    say?: true
    _all?: true
  }

  export type TestimonialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonials to aggregate.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testimonials
    **/
    _count?: true | TestimonialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialsMaxAggregateInputType
  }

  export type GetTestimonialsAggregateType<T extends TestimonialsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonials[P]>
      : GetScalarType<T[P], AggregateTestimonials[P]>
  }




  export type testimonialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testimonialsWhereInput
    orderBy?: testimonialsOrderByWithAggregationInput | testimonialsOrderByWithAggregationInput[]
    by: TestimonialsScalarFieldEnum[] | TestimonialsScalarFieldEnum
    having?: testimonialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialsCountAggregateInputType | true
    _min?: TestimonialsMinAggregateInputType
    _max?: TestimonialsMaxAggregateInputType
  }

  export type TestimonialsGroupByOutputType = {
    id: string
    email: string
    img: string
    of: string
    profession: string
    say: string
    _count: TestimonialsCountAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  type GetTestimonialsGroupByPayload<T extends testimonialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
        }
      >
    >


  export type testimonialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    img?: boolean
    of?: boolean
    profession?: boolean
    say?: boolean
  }, ExtArgs["result"]["testimonials"]>


  export type testimonialsSelectScalar = {
    id?: boolean
    email?: boolean
    img?: boolean
    of?: boolean
    profession?: boolean
    say?: boolean
  }


  export type $testimonialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testimonials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      img: string
      of: string
      profession: string
      say: string
    }, ExtArgs["result"]["testimonials"]>
    composites: {}
  }

  type testimonialsGetPayload<S extends boolean | null | undefined | testimonialsDefaultArgs> = $Result.GetResult<Prisma.$testimonialsPayload, S>

  type testimonialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<testimonialsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestimonialsCountAggregateInputType | true
    }

  export interface testimonialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testimonials'], meta: { name: 'testimonials' } }
    /**
     * Find zero or one Testimonials that matches the filter.
     * @param {testimonialsFindUniqueArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testimonialsFindUniqueArgs>(args: SelectSubset<T, testimonialsFindUniqueArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Testimonials that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {testimonialsFindUniqueOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testimonialsFindUniqueOrThrowArgs>(args: SelectSubset<T, testimonialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsFindFirstArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testimonialsFindFirstArgs>(args?: SelectSubset<T, testimonialsFindFirstArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Testimonials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsFindFirstOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testimonialsFindFirstOrThrowArgs>(args?: SelectSubset<T, testimonialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonials.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends testimonialsFindManyArgs>(args?: SelectSubset<T, testimonialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Testimonials.
     * @param {testimonialsCreateArgs} args - Arguments to create a Testimonials.
     * @example
     * // Create one Testimonials
     * const Testimonials = await prisma.testimonials.create({
     *   data: {
     *     // ... data to create a Testimonials
     *   }
     * })
     * 
     */
    create<T extends testimonialsCreateArgs>(args: SelectSubset<T, testimonialsCreateArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Testimonials.
     * @param {testimonialsCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testimonialsCreateManyArgs>(args?: SelectSubset<T, testimonialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testimonials.
     * @param {testimonialsDeleteArgs} args - Arguments to delete one Testimonials.
     * @example
     * // Delete one Testimonials
     * const Testimonials = await prisma.testimonials.delete({
     *   where: {
     *     // ... filter to delete one Testimonials
     *   }
     * })
     * 
     */
    delete<T extends testimonialsDeleteArgs>(args: SelectSubset<T, testimonialsDeleteArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Testimonials.
     * @param {testimonialsUpdateArgs} args - Arguments to update one Testimonials.
     * @example
     * // Update one Testimonials
     * const testimonials = await prisma.testimonials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testimonialsUpdateArgs>(args: SelectSubset<T, testimonialsUpdateArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Testimonials.
     * @param {testimonialsDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testimonialsDeleteManyArgs>(args?: SelectSubset<T, testimonialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testimonialsUpdateManyArgs>(args: SelectSubset<T, testimonialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testimonials.
     * @param {testimonialsUpsertArgs} args - Arguments to update or create a Testimonials.
     * @example
     * // Update or create a Testimonials
     * const testimonials = await prisma.testimonials.upsert({
     *   create: {
     *     // ... data to create a Testimonials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonials we want to update
     *   }
     * })
     */
    upsert<T extends testimonialsUpsertArgs>(args: SelectSubset<T, testimonialsUpsertArgs<ExtArgs>>): Prisma__testimonialsClient<$Result.GetResult<Prisma.$testimonialsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Testimonials that matches the filter.
     * @param {testimonialsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const testimonials = await prisma.testimonials.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: testimonialsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Testimonials.
     * @param {testimonialsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const testimonials = await prisma.testimonials.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: testimonialsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonials.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends testimonialsCountArgs>(
      args?: Subset<T, testimonialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialsAggregateArgs>(args: Subset<T, TestimonialsAggregateArgs>): Prisma.PrismaPromise<GetTestimonialsAggregateType<T>>

    /**
     * Group by Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testimonialsGroupByArgs} args - Group by arguments.
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
      T extends testimonialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testimonialsGroupByArgs['orderBy'] }
        : { orderBy?: testimonialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testimonialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testimonials model
   */
  readonly fields: testimonialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testimonials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testimonialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the testimonials model
   */ 
  interface testimonialsFieldRefs {
    readonly id: FieldRef<"testimonials", 'String'>
    readonly email: FieldRef<"testimonials", 'String'>
    readonly img: FieldRef<"testimonials", 'String'>
    readonly of: FieldRef<"testimonials", 'String'>
    readonly profession: FieldRef<"testimonials", 'String'>
    readonly say: FieldRef<"testimonials", 'String'>
  }
    

  // Custom InputTypes
  /**
   * testimonials findUnique
   */
  export type testimonialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where: testimonialsWhereUniqueInput
  }

  /**
   * testimonials findUniqueOrThrow
   */
  export type testimonialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where: testimonialsWhereUniqueInput
  }

  /**
   * testimonials findFirst
   */
  export type testimonialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * testimonials findFirstOrThrow
   */
  export type testimonialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testimonials.
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * testimonials findMany
   */
  export type testimonialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter, which testimonials to fetch.
     */
    where?: testimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testimonials to fetch.
     */
    orderBy?: testimonialsOrderByWithRelationInput | testimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testimonials.
     */
    cursor?: testimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testimonials.
     */
    skip?: number
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * testimonials create
   */
  export type testimonialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * The data needed to create a testimonials.
     */
    data: XOR<testimonialsCreateInput, testimonialsUncheckedCreateInput>
  }

  /**
   * testimonials createMany
   */
  export type testimonialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testimonials.
     */
    data: testimonialsCreateManyInput | testimonialsCreateManyInput[]
  }

  /**
   * testimonials update
   */
  export type testimonialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * The data needed to update a testimonials.
     */
    data: XOR<testimonialsUpdateInput, testimonialsUncheckedUpdateInput>
    /**
     * Choose, which testimonials to update.
     */
    where: testimonialsWhereUniqueInput
  }

  /**
   * testimonials updateMany
   */
  export type testimonialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testimonials.
     */
    data: XOR<testimonialsUpdateManyMutationInput, testimonialsUncheckedUpdateManyInput>
    /**
     * Filter which testimonials to update
     */
    where?: testimonialsWhereInput
  }

  /**
   * testimonials upsert
   */
  export type testimonialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * The filter to search for the testimonials to update in case it exists.
     */
    where: testimonialsWhereUniqueInput
    /**
     * In case the testimonials found by the `where` argument doesn't exist, create a new testimonials with this data.
     */
    create: XOR<testimonialsCreateInput, testimonialsUncheckedCreateInput>
    /**
     * In case the testimonials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testimonialsUpdateInput, testimonialsUncheckedUpdateInput>
  }

  /**
   * testimonials delete
   */
  export type testimonialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
    /**
     * Filter which testimonials to delete.
     */
    where: testimonialsWhereUniqueInput
  }

  /**
   * testimonials deleteMany
   */
  export type testimonialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testimonials to delete
     */
    where?: testimonialsWhereInput
  }

  /**
   * testimonials findRaw
   */
  export type testimonialsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * testimonials aggregateRaw
   */
  export type testimonialsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * testimonials without action
   */
  export type testimonialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testimonials
     */
    select?: testimonialsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BlogsScalarFieldEnum: {
    id: 'id',
    actif: 'actif',
    content: 'content',
    date: 'date',
    hashtags: 'hashtags',
    link: 'link',
    title: 'title',
    visible: 'visible'
  };

  export type BlogsScalarFieldEnum = (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    id_blog: 'id_blog',
    blog: 'blog',
    nbr_comments: 'nbr_comments'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const HashtagsScalarFieldEnum: {
    id: 'id',
    color: 'color',
    hashtag: 'hashtag',
    key: 'key'
  };

  export type HashtagsScalarFieldEnum = (typeof HashtagsScalarFieldEnum)[keyof typeof HashtagsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    ordre: 'ordre',
    id: 'id',
    area: 'area',
    blog: 'blog',
    description: 'description',
    hashtags: 'hashtags',
    link: 'link',
    status: 'status'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    technology: 'technology',
    domaine: 'domaine',
    fill: 'fill',
    id_domaine: 'id_domaine',
    img: 'img',
    svg: 'svg',
    exp: 'exp',
    type: 'type',
    order: 'order'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    description: 'description',
    entreprise: 'entreprise',
    location: 'location',
    ordre: 'ordre',
    secteur: 'secteur',
    title: 'title'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const TestimonialsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    img: 'img',
    of: 'of',
    profession: 'profession',
    say: 'say'
  };

  export type TestimonialsScalarFieldEnum = (typeof TestimonialsScalarFieldEnum)[keyof typeof TestimonialsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type blogsWhereInput = {
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    id?: StringFilter<"blogs"> | string
    actif?: BoolFilter<"blogs"> | boolean
    auts?: BlogsAutsCompositeListFilter | BlogsAutsObjectEqualityInput[]
    content?: JsonFilter<"blogs">
    date?: DateTimeFilter<"blogs"> | Date | string
    hashtags?: IntNullableListFilter<"blogs">
    img?: XOR<BlogsImgCompositeFilter, BlogsImgObjectEqualityInput>
    link?: StringFilter<"blogs"> | string
    title?: JsonFilter<"blogs">
    visible?: BoolFilter<"blogs"> | boolean
  }

  export type blogsOrderByWithRelationInput = {
    id?: SortOrder
    actif?: SortOrder
    auts?: BlogsAutsOrderByCompositeAggregateInput
    content?: SortOrder
    date?: SortOrder
    hashtags?: SortOrder
    img?: BlogsImgOrderByInput
    link?: SortOrder
    title?: SortOrder
    visible?: SortOrder
  }

  export type blogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: blogsWhereInput | blogsWhereInput[]
    OR?: blogsWhereInput[]
    NOT?: blogsWhereInput | blogsWhereInput[]
    actif?: BoolFilter<"blogs"> | boolean
    auts?: BlogsAutsCompositeListFilter | BlogsAutsObjectEqualityInput[]
    content?: JsonFilter<"blogs">
    date?: DateTimeFilter<"blogs"> | Date | string
    hashtags?: IntNullableListFilter<"blogs">
    img?: XOR<BlogsImgCompositeFilter, BlogsImgObjectEqualityInput>
    link?: StringFilter<"blogs"> | string
    title?: JsonFilter<"blogs">
    visible?: BoolFilter<"blogs"> | boolean
  }, "id">

  export type blogsOrderByWithAggregationInput = {
    id?: SortOrder
    actif?: SortOrder
    content?: SortOrder
    date?: SortOrder
    hashtags?: SortOrder
    link?: SortOrder
    title?: SortOrder
    visible?: SortOrder
    _count?: blogsCountOrderByAggregateInput
    _avg?: blogsAvgOrderByAggregateInput
    _max?: blogsMaxOrderByAggregateInput
    _min?: blogsMinOrderByAggregateInput
    _sum?: blogsSumOrderByAggregateInput
  }

  export type blogsScalarWhereWithAggregatesInput = {
    AND?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    OR?: blogsScalarWhereWithAggregatesInput[]
    NOT?: blogsScalarWhereWithAggregatesInput | blogsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"blogs"> | string
    actif?: BoolWithAggregatesFilter<"blogs"> | boolean
    content?: JsonWithAggregatesFilter<"blogs">
    date?: DateTimeWithAggregatesFilter<"blogs"> | Date | string
    hashtags?: IntNullableListFilter<"blogs">
    link?: StringWithAggregatesFilter<"blogs"> | string
    title?: JsonWithAggregatesFilter<"blogs">
    visible?: BoolWithAggregatesFilter<"blogs"> | boolean
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: StringFilter<"comments"> | string
    id_blog?: StringFilter<"comments"> | string
    blog?: StringFilter<"comments"> | string
    comments?: CommentsCommentsCompositeListFilter | CommentsCommentsObjectEqualityInput[]
    nbr_comments?: IntFilter<"comments"> | number
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    id_blog?: SortOrder
    blog?: SortOrder
    comments?: CommentsCommentsOrderByCompositeAggregateInput
    nbr_comments?: SortOrder
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_blog?: string
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    blog?: StringFilter<"comments"> | string
    comments?: CommentsCommentsCompositeListFilter | CommentsCommentsObjectEqualityInput[]
    nbr_comments?: IntFilter<"comments"> | number
  }, "id" | "id_blog">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    id_blog?: SortOrder
    blog?: SortOrder
    nbr_comments?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"comments"> | string
    id_blog?: StringWithAggregatesFilter<"comments"> | string
    blog?: StringWithAggregatesFilter<"comments"> | string
    nbr_comments?: IntWithAggregatesFilter<"comments"> | number
  }

  export type hashtagsWhereInput = {
    AND?: hashtagsWhereInput | hashtagsWhereInput[]
    OR?: hashtagsWhereInput[]
    NOT?: hashtagsWhereInput | hashtagsWhereInput[]
    id?: StringFilter<"hashtags"> | string
    color?: StringFilter<"hashtags"> | string
    hashtag?: StringFilter<"hashtags"> | string
    key?: IntFilter<"hashtags"> | number
  }

  export type hashtagsOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    hashtag?: SortOrder
    key?: SortOrder
  }

  export type hashtagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: hashtagsWhereInput | hashtagsWhereInput[]
    OR?: hashtagsWhereInput[]
    NOT?: hashtagsWhereInput | hashtagsWhereInput[]
    color?: StringFilter<"hashtags"> | string
    hashtag?: StringFilter<"hashtags"> | string
    key?: IntFilter<"hashtags"> | number
  }, "id">

  export type hashtagsOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    hashtag?: SortOrder
    key?: SortOrder
    _count?: hashtagsCountOrderByAggregateInput
    _avg?: hashtagsAvgOrderByAggregateInput
    _max?: hashtagsMaxOrderByAggregateInput
    _min?: hashtagsMinOrderByAggregateInput
    _sum?: hashtagsSumOrderByAggregateInput
  }

  export type hashtagsScalarWhereWithAggregatesInput = {
    AND?: hashtagsScalarWhereWithAggregatesInput | hashtagsScalarWhereWithAggregatesInput[]
    OR?: hashtagsScalarWhereWithAggregatesInput[]
    NOT?: hashtagsScalarWhereWithAggregatesInput | hashtagsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"hashtags"> | string
    color?: StringWithAggregatesFilter<"hashtags"> | string
    hashtag?: StringWithAggregatesFilter<"hashtags"> | string
    key?: IntWithAggregatesFilter<"hashtags"> | number
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    ordre?: IntFilter<"projects"> | number
    id?: StringFilter<"projects"> | string
    area?: IntNullableListFilter<"projects">
    blog?: StringFilter<"projects"> | string
    description?: JsonFilter<"projects">
    hashtags?: IntNullableListFilter<"projects">
    image?: XOR<ProjectsImageCompositeFilter, ProjectsImageObjectEqualityInput>
    link?: StringNullableFilter<"projects"> | string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableCompositeFilter, ProjectsMoreDescriptionObjectEqualityInput> | null
    status?: StringFilter<"projects"> | string
    title?: XOR<ProjectsTitleCompositeFilter, ProjectsTitleObjectEqualityInput>
  }

  export type projectsOrderByWithRelationInput = {
    ordre?: SortOrder
    id?: SortOrder
    area?: SortOrder
    blog?: SortOrder
    description?: SortOrder
    hashtags?: SortOrder
    image?: ProjectsImageOrderByInput
    link?: SortOrder
    moreDescription?: ProjectsMoreDescriptionOrderByInput
    status?: SortOrder
    title?: ProjectsTitleOrderByInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    ordre?: IntFilter<"projects"> | number
    area?: IntNullableListFilter<"projects">
    blog?: StringFilter<"projects"> | string
    description?: JsonFilter<"projects">
    hashtags?: IntNullableListFilter<"projects">
    image?: XOR<ProjectsImageCompositeFilter, ProjectsImageObjectEqualityInput>
    link?: StringNullableFilter<"projects"> | string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableCompositeFilter, ProjectsMoreDescriptionObjectEqualityInput> | null
    status?: StringFilter<"projects"> | string
    title?: XOR<ProjectsTitleCompositeFilter, ProjectsTitleObjectEqualityInput>
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    ordre?: SortOrder
    id?: SortOrder
    area?: SortOrder
    blog?: SortOrder
    description?: SortOrder
    hashtags?: SortOrder
    link?: SortOrder
    status?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    ordre?: IntWithAggregatesFilter<"projects"> | number
    id?: StringWithAggregatesFilter<"projects"> | string
    area?: IntNullableListFilter<"projects">
    blog?: StringWithAggregatesFilter<"projects"> | string
    description?: JsonWithAggregatesFilter<"projects">
    hashtags?: IntNullableListFilter<"projects">
    link?: StringNullableWithAggregatesFilter<"projects"> | string | null
    status?: StringWithAggregatesFilter<"projects"> | string
  }

  export type skillsWhereInput = {
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    id?: StringFilter<"skills"> | string
    technology?: StringNullableFilter<"skills"> | string | null
    domaine?: JsonNullableFilter<"skills">
    fill?: StringNullableFilter<"skills"> | string | null
    id_domaine?: StringFilter<"skills"> | string
    img?: StringNullableFilter<"skills"> | string | null
    svg?: StringNullableFilter<"skills"> | string | null
    exp?: IntNullableFilter<"skills"> | number | null
    type?: StringFilter<"skills"> | string
    order?: StringFilter<"skills"> | string
  }

  export type skillsOrderByWithRelationInput = {
    id?: SortOrder
    technology?: SortOrder
    domaine?: SortOrder
    fill?: SortOrder
    id_domaine?: SortOrder
    img?: SortOrder
    svg?: SortOrder
    exp?: SortOrder
    type?: SortOrder
    order?: SortOrder
  }

  export type skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    technology?: StringNullableFilter<"skills"> | string | null
    domaine?: JsonNullableFilter<"skills">
    fill?: StringNullableFilter<"skills"> | string | null
    id_domaine?: StringFilter<"skills"> | string
    img?: StringNullableFilter<"skills"> | string | null
    svg?: StringNullableFilter<"skills"> | string | null
    exp?: IntNullableFilter<"skills"> | number | null
    type?: StringFilter<"skills"> | string
    order?: StringFilter<"skills"> | string
  }, "id">

  export type skillsOrderByWithAggregationInput = {
    id?: SortOrder
    technology?: SortOrder
    domaine?: SortOrder
    fill?: SortOrder
    id_domaine?: SortOrder
    img?: SortOrder
    svg?: SortOrder
    exp?: SortOrder
    type?: SortOrder
    order?: SortOrder
    _count?: skillsCountOrderByAggregateInput
    _avg?: skillsAvgOrderByAggregateInput
    _max?: skillsMaxOrderByAggregateInput
    _min?: skillsMinOrderByAggregateInput
    _sum?: skillsSumOrderByAggregateInput
  }

  export type skillsScalarWhereWithAggregatesInput = {
    AND?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    OR?: skillsScalarWhereWithAggregatesInput[]
    NOT?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"skills"> | string
    technology?: StringNullableWithAggregatesFilter<"skills"> | string | null
    domaine?: JsonNullableWithAggregatesFilter<"skills">
    fill?: StringNullableWithAggregatesFilter<"skills"> | string | null
    id_domaine?: StringWithAggregatesFilter<"skills"> | string
    img?: StringNullableWithAggregatesFilter<"skills"> | string | null
    svg?: StringNullableWithAggregatesFilter<"skills"> | string | null
    exp?: IntNullableWithAggregatesFilter<"skills"> | number | null
    type?: StringWithAggregatesFilter<"skills"> | string
    order?: StringWithAggregatesFilter<"skills"> | string
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: StringFilter<"jobs"> | string
    date?: XOR<JobsDateCompositeFilter, JobsDateObjectEqualityInput>
    description?: JsonFilter<"jobs">
    entreprise?: StringFilter<"jobs"> | string
    location?: JsonFilter<"jobs">
    media?: XOR<JobsMediaCompositeFilter, JobsMediaObjectEqualityInput>
    ordre?: IntFilter<"jobs"> | number
    secteur?: JsonFilter<"jobs">
    title?: JsonFilter<"jobs">
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    date?: JobsDateOrderByInput
    description?: SortOrder
    entreprise?: SortOrder
    location?: SortOrder
    media?: JobsMediaOrderByInput
    ordre?: SortOrder
    secteur?: SortOrder
    title?: SortOrder
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    date?: XOR<JobsDateCompositeFilter, JobsDateObjectEqualityInput>
    description?: JsonFilter<"jobs">
    entreprise?: StringFilter<"jobs"> | string
    location?: JsonFilter<"jobs">
    media?: XOR<JobsMediaCompositeFilter, JobsMediaObjectEqualityInput>
    ordre?: IntFilter<"jobs"> | number
    secteur?: JsonFilter<"jobs">
    title?: JsonFilter<"jobs">
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    entreprise?: SortOrder
    location?: SortOrder
    ordre?: SortOrder
    secteur?: SortOrder
    title?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"jobs"> | string
    description?: JsonWithAggregatesFilter<"jobs">
    entreprise?: StringWithAggregatesFilter<"jobs"> | string
    location?: JsonWithAggregatesFilter<"jobs">
    ordre?: IntWithAggregatesFilter<"jobs"> | number
    secteur?: JsonWithAggregatesFilter<"jobs">
    title?: JsonWithAggregatesFilter<"jobs">
  }

  export type testimonialsWhereInput = {
    AND?: testimonialsWhereInput | testimonialsWhereInput[]
    OR?: testimonialsWhereInput[]
    NOT?: testimonialsWhereInput | testimonialsWhereInput[]
    id?: StringFilter<"testimonials"> | string
    email?: StringFilter<"testimonials"> | string
    img?: StringFilter<"testimonials"> | string
    of?: StringFilter<"testimonials"> | string
    profession?: StringFilter<"testimonials"> | string
    say?: StringFilter<"testimonials"> | string
  }

  export type testimonialsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    img?: SortOrder
    of?: SortOrder
    profession?: SortOrder
    say?: SortOrder
  }

  export type testimonialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: testimonialsWhereInput | testimonialsWhereInput[]
    OR?: testimonialsWhereInput[]
    NOT?: testimonialsWhereInput | testimonialsWhereInput[]
    email?: StringFilter<"testimonials"> | string
    img?: StringFilter<"testimonials"> | string
    of?: StringFilter<"testimonials"> | string
    profession?: StringFilter<"testimonials"> | string
    say?: StringFilter<"testimonials"> | string
  }, "id">

  export type testimonialsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    img?: SortOrder
    of?: SortOrder
    profession?: SortOrder
    say?: SortOrder
    _count?: testimonialsCountOrderByAggregateInput
    _max?: testimonialsMaxOrderByAggregateInput
    _min?: testimonialsMinOrderByAggregateInput
  }

  export type testimonialsScalarWhereWithAggregatesInput = {
    AND?: testimonialsScalarWhereWithAggregatesInput | testimonialsScalarWhereWithAggregatesInput[]
    OR?: testimonialsScalarWhereWithAggregatesInput[]
    NOT?: testimonialsScalarWhereWithAggregatesInput | testimonialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"testimonials"> | string
    email?: StringWithAggregatesFilter<"testimonials"> | string
    img?: StringWithAggregatesFilter<"testimonials"> | string
    of?: StringWithAggregatesFilter<"testimonials"> | string
    profession?: StringWithAggregatesFilter<"testimonials"> | string
    say?: StringWithAggregatesFilter<"testimonials"> | string
  }

  export type blogsCreateInput = {
    id?: string
    actif: boolean
    auts?: XOR<BlogsAutsListCreateEnvelopeInput, BlogsAutsCreateInput> | BlogsAutsCreateInput[]
    content: InputJsonValue
    date: Date | string
    hashtags?: blogsCreatehashtagsInput | number[]
    img: XOR<BlogsImgCreateEnvelopeInput, BlogsImgCreateInput>
    link: string
    title: InputJsonValue
    visible: boolean
  }

  export type blogsUncheckedCreateInput = {
    id?: string
    actif: boolean
    auts?: XOR<BlogsAutsListCreateEnvelopeInput, BlogsAutsCreateInput> | BlogsAutsCreateInput[]
    content: InputJsonValue
    date: Date | string
    hashtags?: blogsCreatehashtagsInput | number[]
    img: XOR<BlogsImgCreateEnvelopeInput, BlogsImgCreateInput>
    link: string
    title: InputJsonValue
    visible: boolean
  }

  export type blogsUpdateInput = {
    actif?: BoolFieldUpdateOperationsInput | boolean
    auts?: XOR<BlogsAutsListUpdateEnvelopeInput, BlogsAutsCreateInput> | BlogsAutsCreateInput[]
    content?: InputJsonValue | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: blogsUpdatehashtagsInput | number[]
    img?: XOR<BlogsImgUpdateEnvelopeInput, BlogsImgCreateInput>
    link?: StringFieldUpdateOperationsInput | string
    title?: InputJsonValue | InputJsonValue
    visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blogsUncheckedUpdateInput = {
    actif?: BoolFieldUpdateOperationsInput | boolean
    auts?: XOR<BlogsAutsListUpdateEnvelopeInput, BlogsAutsCreateInput> | BlogsAutsCreateInput[]
    content?: InputJsonValue | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: blogsUpdatehashtagsInput | number[]
    img?: XOR<BlogsImgUpdateEnvelopeInput, BlogsImgCreateInput>
    link?: StringFieldUpdateOperationsInput | string
    title?: InputJsonValue | InputJsonValue
    visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blogsCreateManyInput = {
    id?: string
    actif: boolean
    auts?: XOR<BlogsAutsListCreateEnvelopeInput, BlogsAutsCreateInput> | BlogsAutsCreateInput[]
    content: InputJsonValue
    date: Date | string
    hashtags?: blogsCreatehashtagsInput | number[]
    img: XOR<BlogsImgCreateEnvelopeInput, BlogsImgCreateInput>
    link: string
    title: InputJsonValue
    visible: boolean
  }

  export type blogsUpdateManyMutationInput = {
    actif?: BoolFieldUpdateOperationsInput | boolean
    auts?: XOR<BlogsAutsListUpdateEnvelopeInput, BlogsAutsCreateInput> | BlogsAutsCreateInput[]
    content?: InputJsonValue | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: blogsUpdatehashtagsInput | number[]
    img?: XOR<BlogsImgUpdateEnvelopeInput, BlogsImgCreateInput>
    link?: StringFieldUpdateOperationsInput | string
    title?: InputJsonValue | InputJsonValue
    visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type blogsUncheckedUpdateManyInput = {
    actif?: BoolFieldUpdateOperationsInput | boolean
    auts?: XOR<BlogsAutsListUpdateEnvelopeInput, BlogsAutsCreateInput> | BlogsAutsCreateInput[]
    content?: InputJsonValue | InputJsonValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: blogsUpdatehashtagsInput | number[]
    img?: XOR<BlogsImgUpdateEnvelopeInput, BlogsImgCreateInput>
    link?: StringFieldUpdateOperationsInput | string
    title?: InputJsonValue | InputJsonValue
    visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type commentsCreateInput = {
    id?: string
    id_blog: string
    blog: string
    comments?: XOR<CommentsCommentsListCreateEnvelopeInput, CommentsCommentsCreateInput> | CommentsCommentsCreateInput[]
    nbr_comments: number
  }

  export type commentsUncheckedCreateInput = {
    id?: string
    id_blog: string
    blog: string
    comments?: XOR<CommentsCommentsListCreateEnvelopeInput, CommentsCommentsCreateInput> | CommentsCommentsCreateInput[]
    nbr_comments: number
  }

  export type commentsUpdateInput = {
    id_blog?: StringFieldUpdateOperationsInput | string
    blog?: StringFieldUpdateOperationsInput | string
    comments?: XOR<CommentsCommentsListUpdateEnvelopeInput, CommentsCommentsCreateInput> | CommentsCommentsCreateInput[]
    nbr_comments?: IntFieldUpdateOperationsInput | number
  }

  export type commentsUncheckedUpdateInput = {
    id_blog?: StringFieldUpdateOperationsInput | string
    blog?: StringFieldUpdateOperationsInput | string
    comments?: XOR<CommentsCommentsListUpdateEnvelopeInput, CommentsCommentsCreateInput> | CommentsCommentsCreateInput[]
    nbr_comments?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateManyInput = {
    id?: string
    id_blog: string
    blog: string
    comments?: XOR<CommentsCommentsListCreateEnvelopeInput, CommentsCommentsCreateInput> | CommentsCommentsCreateInput[]
    nbr_comments: number
  }

  export type commentsUpdateManyMutationInput = {
    id_blog?: StringFieldUpdateOperationsInput | string
    blog?: StringFieldUpdateOperationsInput | string
    comments?: XOR<CommentsCommentsListUpdateEnvelopeInput, CommentsCommentsCreateInput> | CommentsCommentsCreateInput[]
    nbr_comments?: IntFieldUpdateOperationsInput | number
  }

  export type commentsUncheckedUpdateManyInput = {
    id_blog?: StringFieldUpdateOperationsInput | string
    blog?: StringFieldUpdateOperationsInput | string
    comments?: XOR<CommentsCommentsListUpdateEnvelopeInput, CommentsCommentsCreateInput> | CommentsCommentsCreateInput[]
    nbr_comments?: IntFieldUpdateOperationsInput | number
  }

  export type hashtagsCreateInput = {
    id?: string
    color: string
    hashtag: string
    key: number
  }

  export type hashtagsUncheckedCreateInput = {
    id?: string
    color: string
    hashtag: string
    key: number
  }

  export type hashtagsUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    hashtag?: StringFieldUpdateOperationsInput | string
    key?: IntFieldUpdateOperationsInput | number
  }

  export type hashtagsUncheckedUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    hashtag?: StringFieldUpdateOperationsInput | string
    key?: IntFieldUpdateOperationsInput | number
  }

  export type hashtagsCreateManyInput = {
    id?: string
    color: string
    hashtag: string
    key: number
  }

  export type hashtagsUpdateManyMutationInput = {
    color?: StringFieldUpdateOperationsInput | string
    hashtag?: StringFieldUpdateOperationsInput | string
    key?: IntFieldUpdateOperationsInput | number
  }

  export type hashtagsUncheckedUpdateManyInput = {
    color?: StringFieldUpdateOperationsInput | string
    hashtag?: StringFieldUpdateOperationsInput | string
    key?: IntFieldUpdateOperationsInput | number
  }

  export type projectsCreateInput = {
    ordre: number
    id?: string
    area?: projectsCreateareaInput | number[]
    blog: string
    description: InputJsonValue
    hashtags?: projectsCreatehashtagsInput | number[]
    image: XOR<ProjectsImageCreateEnvelopeInput, ProjectsImageCreateInput>
    link?: string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableCreateEnvelopeInput, ProjectsMoreDescriptionCreateInput> | null
    status: string
    title: XOR<ProjectsTitleCreateEnvelopeInput, ProjectsTitleCreateInput>
  }

  export type projectsUncheckedCreateInput = {
    ordre: number
    id?: string
    area?: projectsCreateareaInput | number[]
    blog: string
    description: InputJsonValue
    hashtags?: projectsCreatehashtagsInput | number[]
    image: XOR<ProjectsImageCreateEnvelopeInput, ProjectsImageCreateInput>
    link?: string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableCreateEnvelopeInput, ProjectsMoreDescriptionCreateInput> | null
    status: string
    title: XOR<ProjectsTitleCreateEnvelopeInput, ProjectsTitleCreateInput>
  }

  export type projectsUpdateInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    area?: projectsUpdateareaInput | number[]
    blog?: StringFieldUpdateOperationsInput | string
    description?: InputJsonValue | InputJsonValue
    hashtags?: projectsUpdatehashtagsInput | number[]
    image?: XOR<ProjectsImageUpdateEnvelopeInput, ProjectsImageCreateInput>
    link?: NullableStringFieldUpdateOperationsInput | string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableUpdateEnvelopeInput, ProjectsMoreDescriptionCreateInput> | null
    status?: StringFieldUpdateOperationsInput | string
    title?: XOR<ProjectsTitleUpdateEnvelopeInput, ProjectsTitleCreateInput>
  }

  export type projectsUncheckedUpdateInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    area?: projectsUpdateareaInput | number[]
    blog?: StringFieldUpdateOperationsInput | string
    description?: InputJsonValue | InputJsonValue
    hashtags?: projectsUpdatehashtagsInput | number[]
    image?: XOR<ProjectsImageUpdateEnvelopeInput, ProjectsImageCreateInput>
    link?: NullableStringFieldUpdateOperationsInput | string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableUpdateEnvelopeInput, ProjectsMoreDescriptionCreateInput> | null
    status?: StringFieldUpdateOperationsInput | string
    title?: XOR<ProjectsTitleUpdateEnvelopeInput, ProjectsTitleCreateInput>
  }

  export type projectsCreateManyInput = {
    ordre: number
    id?: string
    area?: projectsCreateareaInput | number[]
    blog: string
    description: InputJsonValue
    hashtags?: projectsCreatehashtagsInput | number[]
    image: XOR<ProjectsImageCreateEnvelopeInput, ProjectsImageCreateInput>
    link?: string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableCreateEnvelopeInput, ProjectsMoreDescriptionCreateInput> | null
    status: string
    title: XOR<ProjectsTitleCreateEnvelopeInput, ProjectsTitleCreateInput>
  }

  export type projectsUpdateManyMutationInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    area?: projectsUpdateareaInput | number[]
    blog?: StringFieldUpdateOperationsInput | string
    description?: InputJsonValue | InputJsonValue
    hashtags?: projectsUpdatehashtagsInput | number[]
    image?: XOR<ProjectsImageUpdateEnvelopeInput, ProjectsImageCreateInput>
    link?: NullableStringFieldUpdateOperationsInput | string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableUpdateEnvelopeInput, ProjectsMoreDescriptionCreateInput> | null
    status?: StringFieldUpdateOperationsInput | string
    title?: XOR<ProjectsTitleUpdateEnvelopeInput, ProjectsTitleCreateInput>
  }

  export type projectsUncheckedUpdateManyInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    area?: projectsUpdateareaInput | number[]
    blog?: StringFieldUpdateOperationsInput | string
    description?: InputJsonValue | InputJsonValue
    hashtags?: projectsUpdatehashtagsInput | number[]
    image?: XOR<ProjectsImageUpdateEnvelopeInput, ProjectsImageCreateInput>
    link?: NullableStringFieldUpdateOperationsInput | string | null
    moreDescription?: XOR<ProjectsMoreDescriptionNullableUpdateEnvelopeInput, ProjectsMoreDescriptionCreateInput> | null
    status?: StringFieldUpdateOperationsInput | string
    title?: XOR<ProjectsTitleUpdateEnvelopeInput, ProjectsTitleCreateInput>
  }

  export type skillsCreateInput = {
    id?: string
    technology?: string | null
    domaine?: InputJsonValue | null
    fill?: string | null
    id_domaine: string
    img?: string | null
    svg?: string | null
    exp?: number | null
    type: string
    order: string
  }

  export type skillsUncheckedCreateInput = {
    id?: string
    technology?: string | null
    domaine?: InputJsonValue | null
    fill?: string | null
    id_domaine: string
    img?: string | null
    svg?: string | null
    exp?: number | null
    type: string
    order: string
  }

  export type skillsUpdateInput = {
    technology?: NullableStringFieldUpdateOperationsInput | string | null
    domaine?: InputJsonValue | InputJsonValue | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    id_domaine?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    svg?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type skillsUncheckedUpdateInput = {
    technology?: NullableStringFieldUpdateOperationsInput | string | null
    domaine?: InputJsonValue | InputJsonValue | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    id_domaine?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    svg?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type skillsCreateManyInput = {
    id?: string
    technology?: string | null
    domaine?: InputJsonValue | null
    fill?: string | null
    id_domaine: string
    img?: string | null
    svg?: string | null
    exp?: number | null
    type: string
    order: string
  }

  export type skillsUpdateManyMutationInput = {
    technology?: NullableStringFieldUpdateOperationsInput | string | null
    domaine?: InputJsonValue | InputJsonValue | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    id_domaine?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    svg?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type skillsUncheckedUpdateManyInput = {
    technology?: NullableStringFieldUpdateOperationsInput | string | null
    domaine?: InputJsonValue | InputJsonValue | null
    fill?: NullableStringFieldUpdateOperationsInput | string | null
    id_domaine?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    svg?: NullableStringFieldUpdateOperationsInput | string | null
    exp?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    order?: StringFieldUpdateOperationsInput | string
  }

  export type jobsCreateInput = {
    id?: string
    date: XOR<JobsDateCreateEnvelopeInput, JobsDateCreateInput>
    description: InputJsonValue
    entreprise: string
    location: InputJsonValue
    media: XOR<JobsMediaCreateEnvelopeInput, JobsMediaCreateInput>
    ordre: number
    secteur: InputJsonValue
    title: InputJsonValue
  }

  export type jobsUncheckedCreateInput = {
    id?: string
    date: XOR<JobsDateCreateEnvelopeInput, JobsDateCreateInput>
    description: InputJsonValue
    entreprise: string
    location: InputJsonValue
    media: XOR<JobsMediaCreateEnvelopeInput, JobsMediaCreateInput>
    ordre: number
    secteur: InputJsonValue
    title: InputJsonValue
  }

  export type jobsUpdateInput = {
    date?: XOR<JobsDateUpdateEnvelopeInput, JobsDateCreateInput>
    description?: InputJsonValue | InputJsonValue
    entreprise?: StringFieldUpdateOperationsInput | string
    location?: InputJsonValue | InputJsonValue
    media?: XOR<JobsMediaUpdateEnvelopeInput, JobsMediaCreateInput>
    ordre?: IntFieldUpdateOperationsInput | number
    secteur?: InputJsonValue | InputJsonValue
    title?: InputJsonValue | InputJsonValue
  }

  export type jobsUncheckedUpdateInput = {
    date?: XOR<JobsDateUpdateEnvelopeInput, JobsDateCreateInput>
    description?: InputJsonValue | InputJsonValue
    entreprise?: StringFieldUpdateOperationsInput | string
    location?: InputJsonValue | InputJsonValue
    media?: XOR<JobsMediaUpdateEnvelopeInput, JobsMediaCreateInput>
    ordre?: IntFieldUpdateOperationsInput | number
    secteur?: InputJsonValue | InputJsonValue
    title?: InputJsonValue | InputJsonValue
  }

  export type jobsCreateManyInput = {
    id?: string
    date: XOR<JobsDateCreateEnvelopeInput, JobsDateCreateInput>
    description: InputJsonValue
    entreprise: string
    location: InputJsonValue
    media: XOR<JobsMediaCreateEnvelopeInput, JobsMediaCreateInput>
    ordre: number
    secteur: InputJsonValue
    title: InputJsonValue
  }

  export type jobsUpdateManyMutationInput = {
    date?: XOR<JobsDateUpdateEnvelopeInput, JobsDateCreateInput>
    description?: InputJsonValue | InputJsonValue
    entreprise?: StringFieldUpdateOperationsInput | string
    location?: InputJsonValue | InputJsonValue
    media?: XOR<JobsMediaUpdateEnvelopeInput, JobsMediaCreateInput>
    ordre?: IntFieldUpdateOperationsInput | number
    secteur?: InputJsonValue | InputJsonValue
    title?: InputJsonValue | InputJsonValue
  }

  export type jobsUncheckedUpdateManyInput = {
    date?: XOR<JobsDateUpdateEnvelopeInput, JobsDateCreateInput>
    description?: InputJsonValue | InputJsonValue
    entreprise?: StringFieldUpdateOperationsInput | string
    location?: InputJsonValue | InputJsonValue
    media?: XOR<JobsMediaUpdateEnvelopeInput, JobsMediaCreateInput>
    ordre?: IntFieldUpdateOperationsInput | number
    secteur?: InputJsonValue | InputJsonValue
    title?: InputJsonValue | InputJsonValue
  }

  export type testimonialsCreateInput = {
    id?: string
    email: string
    img: string
    of: string
    profession: string
    say: string
  }

  export type testimonialsUncheckedCreateInput = {
    id?: string
    email: string
    img: string
    of: string
    profession: string
    say: string
  }

  export type testimonialsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    of?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    say?: StringFieldUpdateOperationsInput | string
  }

  export type testimonialsUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    of?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    say?: StringFieldUpdateOperationsInput | string
  }

  export type testimonialsCreateManyInput = {
    id?: string
    email: string
    img: string
    of: string
    profession: string
    say: string
  }

  export type testimonialsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    of?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    say?: StringFieldUpdateOperationsInput | string
  }

  export type testimonialsUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    of?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    say?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BlogsAutsCompositeListFilter = {
    equals?: BlogsAutsObjectEqualityInput[]
    every?: BlogsAutsWhereInput
    some?: BlogsAutsWhereInput
    none?: BlogsAutsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type BlogsAutsObjectEqualityInput = {
    img: string
    name: string
    email: string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
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

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BlogsImgCompositeFilter = {
    equals?: BlogsImgObjectEqualityInput
    is?: BlogsImgWhereInput
    isNot?: BlogsImgWhereInput
  }

  export type BlogsImgObjectEqualityInput = {
    alt: string
    src: string
  }

  export type BlogsAutsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type BlogsImgOrderByInput = {
    alt?: SortOrder
    src?: SortOrder
  }

  export type blogsCountOrderByAggregateInput = {
    id?: SortOrder
    actif?: SortOrder
    content?: SortOrder
    date?: SortOrder
    hashtags?: SortOrder
    link?: SortOrder
    title?: SortOrder
    visible?: SortOrder
  }

  export type blogsAvgOrderByAggregateInput = {
    hashtags?: SortOrder
  }

  export type blogsMaxOrderByAggregateInput = {
    id?: SortOrder
    actif?: SortOrder
    date?: SortOrder
    link?: SortOrder
    visible?: SortOrder
  }

  export type blogsMinOrderByAggregateInput = {
    id?: SortOrder
    actif?: SortOrder
    date?: SortOrder
    link?: SortOrder
    visible?: SortOrder
  }

  export type blogsSumOrderByAggregateInput = {
    hashtags?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type CommentsCommentsCompositeListFilter = {
    equals?: CommentsCommentsObjectEqualityInput[]
    every?: CommentsCommentsWhereInput
    some?: CommentsCommentsWhereInput
    none?: CommentsCommentsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CommentsCommentsObjectEqualityInput = {
    id: string
    comment: string
    date: Date | string
    id_user: number
    reactions?: CommentsReactionsObjectEqualityInput[]
    response?: CommentsCommentsResponseObjectEqualityInput | null
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

  export type CommentsCommentsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    blog?: SortOrder
    nbr_comments?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    nbr_comments?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    blog?: SortOrder
    nbr_comments?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    id_blog?: SortOrder
    blog?: SortOrder
    nbr_comments?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    nbr_comments?: SortOrder
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

  export type hashtagsCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    hashtag?: SortOrder
    key?: SortOrder
  }

  export type hashtagsAvgOrderByAggregateInput = {
    key?: SortOrder
  }

  export type hashtagsMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    hashtag?: SortOrder
    key?: SortOrder
  }

  export type hashtagsMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    hashtag?: SortOrder
    key?: SortOrder
  }

  export type hashtagsSumOrderByAggregateInput = {
    key?: SortOrder
  }

  export type ProjectsImageCompositeFilter = {
    equals?: ProjectsImageObjectEqualityInput
    is?: ProjectsImageWhereInput
    isNot?: ProjectsImageWhereInput
  }

  export type ProjectsImageObjectEqualityInput = {
    url: string
    size: string
    position: string
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
    isSet?: boolean
  }

  export type ProjectsMoreDescriptionNullableCompositeFilter = {
    equals?: ProjectsMoreDescriptionObjectEqualityInput | null
    is?: ProjectsMoreDescriptionWhereInput | null
    isNot?: ProjectsMoreDescriptionWhereInput | null
    isSet?: boolean
  }

  export type ProjectsMoreDescriptionObjectEqualityInput = {
    children: InputJsonValue
    container_style: InputJsonValue
  }

  export type ProjectsTitleCompositeFilter = {
    equals?: ProjectsTitleObjectEqualityInput
    is?: ProjectsTitleWhereInput
    isNot?: ProjectsTitleWhereInput
  }

  export type ProjectsTitleObjectEqualityInput = {
    color: string
    font: ProjectsTitleFontObjectEqualityInput
    value: InputJsonValue
  }

  export type ProjectsImageOrderByInput = {
    url?: SortOrder
    size?: SortOrder
    position?: SortOrder
  }

  export type ProjectsMoreDescriptionOrderByInput = {
    children?: SortOrder
    container_style?: SortOrder
  }

  export type ProjectsTitleOrderByInput = {
    color?: SortOrder
    font?: ProjectsTitleFontOrderByInput
    value?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    ordre?: SortOrder
    id?: SortOrder
    area?: SortOrder
    blog?: SortOrder
    description?: SortOrder
    hashtags?: SortOrder
    link?: SortOrder
    status?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    ordre?: SortOrder
    area?: SortOrder
    hashtags?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    ordre?: SortOrder
    id?: SortOrder
    blog?: SortOrder
    link?: SortOrder
    status?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    ordre?: SortOrder
    id?: SortOrder
    blog?: SortOrder
    link?: SortOrder
    status?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    ordre?: SortOrder
    area?: SortOrder
    hashtags?: SortOrder
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
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type skillsCountOrderByAggregateInput = {
    id?: SortOrder
    technology?: SortOrder
    domaine?: SortOrder
    fill?: SortOrder
    id_domaine?: SortOrder
    img?: SortOrder
    svg?: SortOrder
    exp?: SortOrder
    type?: SortOrder
    order?: SortOrder
  }

  export type skillsAvgOrderByAggregateInput = {
    exp?: SortOrder
  }

  export type skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    technology?: SortOrder
    fill?: SortOrder
    id_domaine?: SortOrder
    img?: SortOrder
    svg?: SortOrder
    exp?: SortOrder
    type?: SortOrder
    order?: SortOrder
  }

  export type skillsMinOrderByAggregateInput = {
    id?: SortOrder
    technology?: SortOrder
    fill?: SortOrder
    id_domaine?: SortOrder
    img?: SortOrder
    svg?: SortOrder
    exp?: SortOrder
    type?: SortOrder
    order?: SortOrder
  }

  export type skillsSumOrderByAggregateInput = {
    exp?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type JobsDateCompositeFilter = {
    equals?: JobsDateObjectEqualityInput
    is?: JobsDateWhereInput
    isNot?: JobsDateWhereInput
  }

  export type JobsDateObjectEqualityInput = {
    end: string
    start: string
  }

  export type JobsMediaCompositeFilter = {
    equals?: JobsMediaObjectEqualityInput
    is?: JobsMediaWhereInput
    isNot?: JobsMediaWhereInput
  }

  export type JobsMediaObjectEqualityInput = {
    alt: string
    link: string
    size?: string[]
    src: string
  }

  export type JobsDateOrderByInput = {
    end?: SortOrder
    start?: SortOrder
  }

  export type JobsMediaOrderByInput = {
    alt?: SortOrder
    link?: SortOrder
    size?: SortOrder
    src?: SortOrder
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    entreprise?: SortOrder
    location?: SortOrder
    ordre?: SortOrder
    secteur?: SortOrder
    title?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    entreprise?: SortOrder
    ordre?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    entreprise?: SortOrder
    ordre?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type testimonialsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    img?: SortOrder
    of?: SortOrder
    profession?: SortOrder
    say?: SortOrder
  }

  export type testimonialsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    img?: SortOrder
    of?: SortOrder
    profession?: SortOrder
    say?: SortOrder
  }

  export type testimonialsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    img?: SortOrder
    of?: SortOrder
    profession?: SortOrder
    say?: SortOrder
  }

  export type BlogsAutsListCreateEnvelopeInput = {
    set?: BlogsAutsCreateInput | BlogsAutsCreateInput[]
  }

  export type BlogsAutsCreateInput = {
    img: string
    name: string
    email: string
  }

  export type blogsCreatehashtagsInput = {
    set: number[]
  }

  export type BlogsImgCreateEnvelopeInput = {
    set?: BlogsImgCreateInput
  }

  export type BlogsImgCreateInput = {
    alt: string
    src: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BlogsAutsListUpdateEnvelopeInput = {
    set?: BlogsAutsCreateInput | BlogsAutsCreateInput[]
    push?: BlogsAutsCreateInput | BlogsAutsCreateInput[]
    updateMany?: BlogsAutsUpdateManyInput
    deleteMany?: BlogsAutsDeleteManyInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type blogsUpdatehashtagsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type BlogsImgUpdateEnvelopeInput = {
    set?: BlogsImgCreateInput
    update?: BlogsImgUpdateInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CommentsCommentsListCreateEnvelopeInput = {
    set?: CommentsCommentsCreateInput | CommentsCommentsCreateInput[]
  }

  export type CommentsCommentsCreateInput = {
    id: string
    comment: string
    date: Date | string
    id_user: number
    reactions?: CommentsReactionsCreateInput | CommentsReactionsCreateInput[]
    response?: CommentsCommentsResponseCreateInput | null
  }

  export type CommentsCommentsListUpdateEnvelopeInput = {
    set?: CommentsCommentsCreateInput | CommentsCommentsCreateInput[]
    push?: CommentsCommentsCreateInput | CommentsCommentsCreateInput[]
    updateMany?: CommentsCommentsUpdateManyInput
    deleteMany?: CommentsCommentsDeleteManyInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectsCreateareaInput = {
    set: number[]
  }

  export type projectsCreatehashtagsInput = {
    set: number[]
  }

  export type ProjectsImageCreateEnvelopeInput = {
    set?: ProjectsImageCreateInput
  }

  export type ProjectsImageCreateInput = {
    url: string
    size: string
    position: string
  }

  export type ProjectsMoreDescriptionNullableCreateEnvelopeInput = {
    set?: ProjectsMoreDescriptionCreateInput | null
  }

  export type ProjectsMoreDescriptionCreateInput = {
    children: InputJsonValue
    container_style: InputJsonValue
  }

  export type ProjectsTitleCreateEnvelopeInput = {
    set?: ProjectsTitleCreateInput
  }

  export type ProjectsTitleCreateInput = {
    color: string
    font: ProjectsTitleFontCreateInput
    value: InputJsonValue
  }

  export type projectsUpdateareaInput = {
    set?: number[]
    push?: number | number[]
  }

  export type projectsUpdatehashtagsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ProjectsImageUpdateEnvelopeInput = {
    set?: ProjectsImageCreateInput
    update?: ProjectsImageUpdateInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ProjectsMoreDescriptionNullableUpdateEnvelopeInput = {
    set?: ProjectsMoreDescriptionCreateInput | null
    upsert?: ProjectsMoreDescriptionUpsertInput
    unset?: boolean
  }

  export type ProjectsTitleUpdateEnvelopeInput = {
    set?: ProjectsTitleCreateInput
    update?: ProjectsTitleUpdateInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type JobsDateCreateEnvelopeInput = {
    set?: JobsDateCreateInput
  }

  export type JobsDateCreateInput = {
    end: string
    start: string
  }

  export type JobsMediaCreateEnvelopeInput = {
    set?: JobsMediaCreateInput
  }

  export type JobsMediaCreateInput = {
    alt: string
    link: string
    size?: JobsMediaCreatesizeInput | string[]
    src: string
  }

  export type JobsDateUpdateEnvelopeInput = {
    set?: JobsDateCreateInput
    update?: JobsDateUpdateInput
  }

  export type JobsMediaUpdateEnvelopeInput = {
    set?: JobsMediaCreateInput
    update?: JobsMediaUpdateInput
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BlogsAutsWhereInput = {
    AND?: BlogsAutsWhereInput | BlogsAutsWhereInput[]
    OR?: BlogsAutsWhereInput[]
    NOT?: BlogsAutsWhereInput | BlogsAutsWhereInput[]
    img?: StringFilter<"BlogsAuts"> | string
    name?: StringFilter<"BlogsAuts"> | string
    email?: StringFilter<"BlogsAuts"> | string
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

  export type BlogsImgWhereInput = {
    AND?: BlogsImgWhereInput | BlogsImgWhereInput[]
    OR?: BlogsImgWhereInput[]
    NOT?: BlogsImgWhereInput | BlogsImgWhereInput[]
    alt?: StringFilter<"BlogsImg"> | string
    src?: StringFilter<"BlogsImg"> | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
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

  export type CommentsCommentsWhereInput = {
    AND?: CommentsCommentsWhereInput | CommentsCommentsWhereInput[]
    OR?: CommentsCommentsWhereInput[]
    NOT?: CommentsCommentsWhereInput | CommentsCommentsWhereInput[]
    id?: StringFilter<"CommentsComments"> | string
    comment?: StringFilter<"CommentsComments"> | string
    date?: DateTimeFilter<"CommentsComments"> | Date | string
    id_user?: IntFilter<"CommentsComments"> | number
    reactions?: CommentsReactionsCompositeListFilter | CommentsReactionsObjectEqualityInput[]
    response?: XOR<CommentsCommentsResponseNullableCompositeFilter, CommentsCommentsResponseObjectEqualityInput> | null
  }

  export type CommentsReactionsObjectEqualityInput = {
    reaction: string
    by: number
  }

  export type CommentsCommentsResponseObjectEqualityInput = {
    id: string
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

  export type ProjectsImageWhereInput = {
    AND?: ProjectsImageWhereInput | ProjectsImageWhereInput[]
    OR?: ProjectsImageWhereInput[]
    NOT?: ProjectsImageWhereInput | ProjectsImageWhereInput[]
    url?: StringFilter<"ProjectsImage"> | string
    size?: StringFilter<"ProjectsImage"> | string
    position?: StringFilter<"ProjectsImage"> | string
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
    isSet?: boolean
  }

  export type ProjectsMoreDescriptionWhereInput = {
    AND?: ProjectsMoreDescriptionWhereInput | ProjectsMoreDescriptionWhereInput[]
    OR?: ProjectsMoreDescriptionWhereInput[]
    NOT?: ProjectsMoreDescriptionWhereInput | ProjectsMoreDescriptionWhereInput[]
    children?: JsonFilter<"ProjectsMoreDescription">
    container_style?: JsonFilter<"ProjectsMoreDescription">
  }

  export type ProjectsTitleWhereInput = {
    AND?: ProjectsTitleWhereInput | ProjectsTitleWhereInput[]
    OR?: ProjectsTitleWhereInput[]
    NOT?: ProjectsTitleWhereInput | ProjectsTitleWhereInput[]
    color?: StringFilter<"ProjectsTitle"> | string
    font?: XOR<ProjectsTitleFontCompositeFilter, ProjectsTitleFontObjectEqualityInput>
    value?: JsonFilter<"ProjectsTitle">
  }

  export type ProjectsTitleFontObjectEqualityInput = {
    ff: string
    fs: number
    fw: number
    link: string
  }

  export type ProjectsTitleFontOrderByInput = {
    ff?: SortOrder
    fs?: SortOrder
    fw?: SortOrder
    link?: SortOrder
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
    isSet?: boolean
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
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type JobsDateWhereInput = {
    AND?: JobsDateWhereInput | JobsDateWhereInput[]
    OR?: JobsDateWhereInput[]
    NOT?: JobsDateWhereInput | JobsDateWhereInput[]
    end?: StringFilter<"JobsDate"> | string
    start?: StringFilter<"JobsDate"> | string
  }

  export type JobsMediaWhereInput = {
    AND?: JobsMediaWhereInput | JobsMediaWhereInput[]
    OR?: JobsMediaWhereInput[]
    NOT?: JobsMediaWhereInput | JobsMediaWhereInput[]
    alt?: StringFilter<"JobsMedia"> | string
    link?: StringFilter<"JobsMedia"> | string
    size?: StringNullableListFilter<"JobsMedia">
    src?: StringFilter<"JobsMedia"> | string
  }

  export type BlogsAutsUpdateManyInput = {
    where: BlogsAutsWhereInput
    data: BlogsAutsUpdateInput
  }

  export type BlogsAutsDeleteManyInput = {
    where: BlogsAutsWhereInput
  }

  export type BlogsImgUpdateInput = {
    alt?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsReactionsCreateInput = {
    reaction: string
    by: number
  }

  export type CommentsCommentsResponseCreateInput = {
    id: string
  }

  export type CommentsCommentsUpdateManyInput = {
    where: CommentsCommentsWhereInput
    data: CommentsCommentsUpdateInput
  }

  export type CommentsCommentsDeleteManyInput = {
    where: CommentsCommentsWhereInput
  }

  export type ProjectsTitleFontCreateInput = {
    ff: string
    fs: number
    fw: number
    link: string
  }

  export type ProjectsImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsMoreDescriptionUpsertInput = {
    set: ProjectsMoreDescriptionCreateInput | null
    update: ProjectsMoreDescriptionUpdateInput
  }

  export type ProjectsTitleUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    font?: XOR<ProjectsTitleFontUpdateEnvelopeInput, ProjectsTitleFontCreateInput>
    value?: InputJsonValue | InputJsonValue
  }

  export type JobsMediaCreatesizeInput = {
    set: string[]
  }

  export type JobsDateUpdateInput = {
    end?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
  }

  export type JobsMediaUpdateInput = {
    alt?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    size?: JobsMediaUpdatesizeInput | string[]
    src?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsReactionsCompositeListFilter = {
    equals?: CommentsReactionsObjectEqualityInput[]
    every?: CommentsReactionsWhereInput
    some?: CommentsReactionsWhereInput
    none?: CommentsReactionsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CommentsCommentsResponseNullableCompositeFilter = {
    equals?: CommentsCommentsResponseObjectEqualityInput | null
    is?: CommentsCommentsResponseWhereInput | null
    isNot?: CommentsCommentsResponseWhereInput | null
    isSet?: boolean
  }

  export type ProjectsTitleFontCompositeFilter = {
    equals?: ProjectsTitleFontObjectEqualityInput
    is?: ProjectsTitleFontWhereInput
    isNot?: ProjectsTitleFontWhereInput
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BlogsAutsUpdateInput = {
    img?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: IntFieldUpdateOperationsInput | number
    reactions?: XOR<CommentsReactionsListUpdateEnvelopeInput, CommentsReactionsCreateInput> | CommentsReactionsCreateInput[]
    response?: XOR<CommentsCommentsResponseNullableUpdateEnvelopeInput, CommentsCommentsResponseCreateInput> | null
  }

  export type ProjectsMoreDescriptionUpdateInput = {
    children?: InputJsonValue | InputJsonValue
    container_style?: InputJsonValue | InputJsonValue
  }

  export type ProjectsTitleFontUpdateEnvelopeInput = {
    set?: ProjectsTitleFontCreateInput
    update?: ProjectsTitleFontUpdateInput
  }

  export type JobsMediaUpdatesizeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CommentsReactionsWhereInput = {
    AND?: CommentsReactionsWhereInput | CommentsReactionsWhereInput[]
    OR?: CommentsReactionsWhereInput[]
    NOT?: CommentsReactionsWhereInput | CommentsReactionsWhereInput[]
    reaction?: StringFilter<"CommentsReactions"> | string
    by?: IntFilter<"CommentsReactions"> | number
  }

  export type CommentsCommentsResponseWhereInput = {
    AND?: CommentsCommentsResponseWhereInput | CommentsCommentsResponseWhereInput[]
    OR?: CommentsCommentsResponseWhereInput[]
    NOT?: CommentsCommentsResponseWhereInput | CommentsCommentsResponseWhereInput[]
    id?: StringFilter<"CommentsCommentsResponse"> | string
  }

  export type ProjectsTitleFontWhereInput = {
    AND?: ProjectsTitleFontWhereInput | ProjectsTitleFontWhereInput[]
    OR?: ProjectsTitleFontWhereInput[]
    NOT?: ProjectsTitleFontWhereInput | ProjectsTitleFontWhereInput[]
    ff?: StringFilter<"ProjectsTitleFont"> | string
    fs?: IntFilter<"ProjectsTitleFont"> | number
    fw?: IntFilter<"ProjectsTitleFont"> | number
    link?: StringFilter<"ProjectsTitleFont"> | string
  }

  export type CommentsReactionsListUpdateEnvelopeInput = {
    set?: CommentsReactionsCreateInput | CommentsReactionsCreateInput[]
    push?: CommentsReactionsCreateInput | CommentsReactionsCreateInput[]
    updateMany?: CommentsReactionsUpdateManyInput
    deleteMany?: CommentsReactionsDeleteManyInput
  }

  export type CommentsCommentsResponseNullableUpdateEnvelopeInput = {
    set?: CommentsCommentsResponseCreateInput | null
    upsert?: CommentsCommentsResponseUpsertInput
    unset?: boolean
  }

  export type ProjectsTitleFontUpdateInput = {
    ff?: StringFieldUpdateOperationsInput | string
    fs?: IntFieldUpdateOperationsInput | number
    fw?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsReactionsUpdateManyInput = {
    where: CommentsReactionsWhereInput
    data: CommentsReactionsUpdateInput
  }

  export type CommentsReactionsDeleteManyInput = {
    where: CommentsReactionsWhereInput
  }

  export type CommentsCommentsResponseUpsertInput = {
    set: CommentsCommentsResponseCreateInput | null
    update: CommentsCommentsResponseUpdateInput
  }

  export type CommentsReactionsUpdateInput = {
    reaction?: StringFieldUpdateOperationsInput | string
    by?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCommentsResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BlogsAutsDefaultArgs instead
     */
    export type BlogsAutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogsAutsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogsImgDefaultArgs instead
     */
    export type BlogsImgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogsImgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentsReactionsDefaultArgs instead
     */
    export type CommentsReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentsReactionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentsCommentsDefaultArgs instead
     */
    export type CommentsCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentsCommentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentsCommentsResponseDefaultArgs instead
     */
    export type CommentsCommentsResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentsCommentsResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsMoreDescriptionDefaultArgs instead
     */
    export type ProjectsMoreDescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsMoreDescriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsImageDefaultArgs instead
     */
    export type ProjectsImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsTitleDefaultArgs instead
     */
    export type ProjectsTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsTitleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsTitleFontDefaultArgs instead
     */
    export type ProjectsTitleFontArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsTitleFontDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobsDateDefaultArgs instead
     */
    export type JobsDateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobsDateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobsMediaDefaultArgs instead
     */
    export type JobsMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobsMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use blogsDefaultArgs instead
     */
    export type blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = blogsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use commentsDefaultArgs instead
     */
    export type commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = commentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use hashtagsDefaultArgs instead
     */
    export type hashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = hashtagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use projectsDefaultArgs instead
     */
    export type projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = projectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use skillsDefaultArgs instead
     */
    export type skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = skillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jobsDefaultArgs instead
     */
    export type jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use testimonialsDefaultArgs instead
     */
    export type testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = testimonialsDefaultArgs<ExtArgs>

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