cd "$(dirname "$0")" || exit 1

cp schema.prisma schema.prisma.mysql
sed -ie 's/mysql/sqlite/g' schema.prisma
sed -ie 's/@db.Text//' schema.prisma
sed -ie 's/Json/String/g' schema.prisma
