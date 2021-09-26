import {Mail} from '@app/components/Icons';

export default function IconPill() {
  return (
    <div className="px-2 py-2 rounded-xl flex items-center justify-center gap-3 bg-secondary">
      <div className="rounded-full bg-primary p-1 ml-1">
        <Mail className="mx-1 text-secondary" size={30} />
      </div>
      <div className="mr-1">
      Mail
      </div>
    </div>
  );
}
