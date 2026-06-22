# ФЛОРА - Бекенд

REST API для квіткового магазину ФЛОРА

## Змінні середовища (.env)

```
PORT=3000
DATABASE_URL=postgres://user:password@host:5432/flora-db
DB_SYNC=true
```

## Swagger UI

Після запуску доступний за адресою: http://localhost:3000/api-docs

## Ендпоінти

- `GET /api/bouquets` - список букетів
- `POST /api/bouquets` - створити букет
- `GET /api/bouquets/:id` - букет за ID
- `PUT /api/bouquets/:id` - оновити букет
- `DELETE /api/bouquets/:id` - видалити букет
- `PATCH /api/bouquets/:id/favorite` - змінити статус favorite
- `PATCH /api/bouquets/:id/photo` - завантажити фото
- `GET /api/reviews` - відгуки
- `POST /api/reviews` - додати відгук
- `GET /api/orders` - замовлення
- `POST /api/orders` - оформити замовлення

Розробник: ksenia  
Репозиторій: https://github.com/ksenia/flora-back
