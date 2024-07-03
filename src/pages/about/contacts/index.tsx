import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type ContactsProps = {
  contacts: {
    email: string;
    phone: string;
    address: string;
  };
};

const Contacts = memo(({ contacts }: ContactsProps) => {
  return (
    <>
      <AppHead title="Contacts" description="" />
      <div>Contacts</div>
      <div>Email: {contacts.email}</div>
      <div>Phone: {contacts.phone}</div>
      <div>Address: {contacts.address}</div>
    </>
  );
});
Contacts.displayName = "Contacts";

export default Contacts;

export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<ContactsProps>
> {
  // Accesso al DB FAKE
  const contacts = {
    email: "test@test.com",
    phone: "1234567890" + Math.random(),
    address: "1234 Elm Street",
  };
  return {
    props: { contacts },
  };
}
