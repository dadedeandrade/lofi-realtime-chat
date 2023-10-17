export async function getServerSideProps(ctx) {
  const { userId } = ctx.query;

  return {
    props: {
      userId,
    },
  };
}

export default function ChatPage({ params, searchParams }) {
  console.log(params);
  console.log(searchParams);

  return (
    <>
      <h1>tete</h1>
    </>
  );
}
