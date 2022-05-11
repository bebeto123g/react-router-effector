// глобаный костыль для старта, чтоб не париться с типами
export type ITimeoutId = ReturnType<typeof setTimeout> | null