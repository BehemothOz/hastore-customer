const brands = document.querySelectorAll('.brand');
const brandsLength = brands.length;
let i;

for (i = 0; i < brandsLength; i++) {
  brands[i].addEventListener('click', function(e) {
    const brandName = e.target.dataset.name;

    document.location.href = location.origin + '/catalog' + '?' + 'brand=' + brandName;
 })
}