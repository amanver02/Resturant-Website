import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSckgFOjP2kHkvShULAAyAGXHjw_vRkXSZjuuzuNiOBFqjNf6A/viewform?usp=sf_link"
  className="rounded bg-orange-600 px-4 py-2 font-medium text-white disabled:opacity-50 inline-block text-center"
>
  Make Payment
</a>

    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
