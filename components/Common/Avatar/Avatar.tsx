import * as Avatar from "@radix-ui/react-avatar";

const AvatarCpt = () => (
  <Avatar.Root className="AvatarRoot">
    <Avatar.Image
      className="AvatarImage"
      src="http://thedeandsouzamindset.ctcin.bio/upload/969041612109977.JPG
      "
      alt="Avatar"
    />
    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
      JD
    </Avatar.Fallback>
  </Avatar.Root>
);

export default AvatarCpt;
