import { CloseIcon, HamburgerIcon, ReloadIcon } from '@/assets/svg';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import Chip from '@/components/chip/chip';
import AdmissionQuickLinkTabs from '@/components/header/bottom-sheet/admission-quick-link-tabs';
import Contact from '@/components/header/bottom-sheet/contact';
import IconButton from '@/components/icon-button/icon-button';
import CHIP_LABEL from '@/constants/header-chip-labels';
import { useBottomSheet } from '@/hooks/use-bottom-sheet-hooks';
import useAdmissionStore from '@/stores/store/admission-store';

function Header() {
  const { admissionType } = useAdmissionStore();
  const { open, onOpen, onClose } = useBottomSheet();

  return (
    <>
      <header className="sticky top-0 z-10 h-16 w-full bg-white">
        <div className="flex h-full items-center justify-between px-4">
          <IconButton aria-label="새로고침" onClick={() => window.location.reload()}>
            <ReloadIcon />
          </IconButton>
          <div className="flex items-center gap-2">
            <h1 className="text-center text-headline text-primary">명지대 입학처 챗봇</h1>
            {admissionType && <Chip label={CHIP_LABEL[admissionType]} />}
          </div>
          <IconButton aria-label="메뉴" onClick={onOpen}>
            <HamburgerIcon />
          </IconButton>
        </div>
      </header>
      <BottomSheet open={open} onClose={onClose}>
        <div className="flex h-full w-full flex-col justify-between gap-3">
          <IconButton onClick={onClose} className="absolute right-10 top-10" aria-label="닫기 버튼">
            <CloseIcon />
          </IconButton>
          <AdmissionQuickLinkTabs initialAdmissionType={admissionType} />
          <Contact />
        </div>
      </BottomSheet>
    </>
  );
}

export default Header;
