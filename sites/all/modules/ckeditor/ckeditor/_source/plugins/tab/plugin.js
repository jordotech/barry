(ޮ����                         � F              l                     �ޮ����              8߮����            �߮����                                           j       �ޮ����\ d e v i c e \ h a r d d i s k v o l u m e 1 \ w i n d o w s \ s y s t e m 3 2 \ s v c h o s t . e x e   `P�\       H߮���� �D   P           0      (        P   Pq ��%:XiDp�ڢO+�                [��t        ʨ�           �ʨ�    �߮�����ݮ�����߮����    ��tLMEM  @�������î������i1    ��]1    !��'    !	�&    !iq    !y}    ��M    ��}    ���p�����p��!��    !�!    ���p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p��!��    !�4X    !9�e    !I�e    �X�e    �h�e    ��=    �]=    ���p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p�����p��        �        Frag         MmSt        �Hr    X������ MmSt         r�����                                     @�\����  �	    �h��������   ����   �         MmSt        ���	    �਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱���਱����5   � WMmSt        ��    ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������EDITOR.document.getById( 'example' );
 * element.focusPrevious();
 */
CKEDITOR.dom.element.prototype.focusPrevious = function( ignoreChildren, indexToUse )
{
	var $ = this.$,
		curTabIndex = ( indexToUse === undefined ? this.getTabIndex() : indexToUse ),
		passedCurrent, enteredCurrent,
		elected,
		electedTabIndex = 0,
		elementTabIndex;

	var element = this.getDocument().getBody().getLast();

	while ( ( element = element.getPreviousSourceNode( false, CKEDITOR.NODE_ELEMENT ) ) )
	{
		if ( !passedCurrent )
		{
			if ( !enteredCurrent && element.equals( this ) )
			{
				enteredCurrent = true;

				// Ignore this element, if required.
				if ( ignoreChildren )
				{
					if ( !( element = element.getPreviousSourceNode( true, CKEDITOR.NODE_ELEMENT ) ) )
						break;
					passedCurrent = 1;
				}
			}
			else if ( enteredCurrent && !this.contains( element ) )
				passedCurrent = 1;
		}

		if ( !element.isVisible() || ( elementTabIndex = element.getTabIndex() ) < 0 )
			continue;

		if ( curTabIndex <= 0 )
		{
			// If this element has tabindex <= 0 then we must look for:
			//		1. An element before this one containing tabindex=0.
			//		2. The last element with the highest tabindex.

			if ( passedCurrent && elementTabIndex === 0 )
			{
				elected = element;
				break;
			}

			if ( elementTabIndex > electedTabIndex )
			{
				elected = element;
				electedTabIndex = elementTabIndex;
			}
		}
		else
		{
			// If this element has tabindex > 0 we must look for:
			//		1. An element preceeding this one, with the same tabindex.
			//		2. The last element in source other with the highest tabindex
			//		   that is lower than this element tabindex.

			if ( passedCurrent && elementTabIndex == curTabIndex )
			{
				elected = element;
				break;
			}

			if ( elementTabIndex < curTabIndex && ( !elected || elementTabIndex > electedTabIndex ) )
			{
				elected = element;
				electedTabIndex = elementTabIndex;
			}
		}
	}

	if ( elected )
		elected.focus();
};

/**
 * Intructs the editor to add a number of spaces (&amp;nbsp;) to the text when
 * hitting the TAB key. If set to zero, the TAB key will be used to move the
 * cursor focus to the next element in the page, out of the editor focus.
 * @name CKEDITOR.config.tabSpaces
 * @type Number
 * @default 0
 * @example
 * config.tabSpaces = 4;
 */
