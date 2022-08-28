---
title: 'Создание своего оператора RxJS'
date: '05.08.2022'
tags: rxjs
---

Самым простым способом создания своего оператора будет использование уже существующего оператора RxJS:

```
function filterNil<T>(): MonoTypeOperatorFunction<T> {
  return filter(value => value !== null);
}
```

Если же нам нужно вычленить из потока сразу несколько операторов, то мы можем воспользоваться другим
подходом:

```
function filterNil<T>(): MonoTypeOperatorFunction<T> {
  return (source$: Observable<T>) => source$
    .pipe(
        filter(value => value !== null)
    );
}
```

Не все операторы возвращают тот же тип данных, что принимают, в этом случае вместо
`MonoTypeOperatorFunction` следует использовать тип `OperatorFunction`.

