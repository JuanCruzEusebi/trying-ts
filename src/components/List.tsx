interface Props {
  subs: Array<{
    nick: string;
    subMonths: number;
    avatar: string;
    description?: string;
  }>;
}

export default function List({ subs }: Props) {
  const renderList = (): JSX.Element[] => {
    {
      return subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>
              {sub.nick} (<small>{sub.subMonths}</small>){" "}
              <p>{sub.description?.substring(0, 100)}</p>
            </h4>
          </li>
        );
      });
    }
  };

  return <ul>{renderList()}</ul>;
}
