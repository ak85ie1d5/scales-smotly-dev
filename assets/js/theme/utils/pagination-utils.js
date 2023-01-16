const changeWishlistPaginationLinks = (wishlistUrl, ...paginationItems) => $.each(paginationItems, (_, $item) => {
    if ($item.length && !$item.attr('href').includes('page=')) {
        const pageNumber = $item.attr('href');
        $item.attr('href', `${wishlistUrl}page=${pageNumber}`);
    }
});

/**
* helps to withdraw differences in structures around the stencil resource pagination
*/

export const wishlistPaginationHelper = () => {
    const $paginationLink = $('.pagination-link');

    if (!$paginationLink.length) return;

    const $nextItem = $('.next', $paginationLink);
    const $prevItem = $('.previous', $paginationLink);
    const currentHref = $('[data-pagination-current-page-link]').attr('href');
    const partialPaginationUrl = currentHref.split('page=').shift();

    changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};
