�,2    � &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &���� &��� O Luaf         ������$�����                      ؆�	����        8Cr����                               Ar����                                                                       rp�����                                        �u����]PQx��                               s u b p r o c e s s . p y        NtFs        xҁ����`.
�����%	����        �     xAr����                x�Q�����iO����                x      � �     0Br����. .     0Br����                                                                                        \ D e v i c e \ H a r d d i s k V o l u m e 1 \ P r o g r a m   F i l e s   ( x 8 6 ) \ D i g s b y \ r e s \ s k i n s \ W i n d o w s   7 \ s t a t u s i c o n s \ t y p i n g . p n g l     / Luaf        �"�	����                              ؆�	����        ��b����                              Dr����                                                                       rp�����                                        h�b����������                               s u b p r o c e s s . p y o ���� PfFK         ���������	����;X�I���        	 IoNm        �qp������a����  F i l e s   ( x 8 6 ) \ D i g s b y \ l i b \ g u i \ t o o l b o x \ d n d . p y o   O   Y O                O
Sec�        �   �       ����        I S T R                 �����   1 -                 xG������.� `���  u����        ������ <k����       ��     
� PfRL        8ہ����8ہ����-              �Tok� 0      �t����                p                      ��к       �                    Advapi  �,     ��     �              ��L�&u �x����'D      �`     �`      �`                                          �             0Ir����        �!
�����!
�����!
����                                   pi
�����             0Ir����                   �                                    $               �                     @              @      v                                                         ��                              "                                                                                                                                                                                                                                                                                                            Kr����    r�  Kr����`   CurKr����   d �$Kr����   �/4Kr����   � S@Kr����   P�LKr����   tFo XKr����       xKr����       �Kr����   eObj�Kr����   Proc�Mr����   rma �Mr����  �eI  Lr����      8Lr����     ��Mr����   FA XMr����   �He�Lr����   pxY�Lr����   �or�Lr����   Free8Mr����   �TMr����
    sy8Mr����   �TXMr����   �HexMr����
   oy �Mr����   FA �Mr����
   x 9�Mr����  �eI  �Mr����   rma               @                    !                               P   M�i�\%4�� ��c�'A�     P   ���g�7	��
=��q     P   8���k�������!���+�     P   WM�*���/�c]��HTHT     P   �#8��Ys���l	!�
�     P   ��������_�{y���{��     P   R��L�z����u�:�ο%     P   �����{��H��/B�RN�     P   5$�b�3��hEV3�����#�     P   2HH�Bm�p��M�DV��     P   Jj�tF��|��N=?     P   Pq ��%:XiDp�ڢO+�     P   ~���*��/�����k���+�     P   5�c�1a�(��XyH�"�4*     P   �Pc��')ч�]cmOM�k-     P   @����MT�\^*��*�q}�     P   quZ���ի�U'%U1���f�     P   ��\��X<?.�ĀC&aD     P   �}^��g��`�6�b�6��!g     P   6�Z�Y��Ȍ��U}#m���            �,          sFor� i  !env.hc ? '' : ' href="javascript:void(\'' + this.label + '\')"',
						' role="button" aria-labelledby="', id , '_label" aria-describedby="', id, '_text" aria-haspopup="true"' );

			// Some browsers don't cancel key events in the keydown but in the
			// keypress.
			// TODO: Check if really needed for Gecko+Mac.
			if ( CKEDITOR.env.opera || ( CKEDITOR.env.gecko && CKEDITOR.env.mac ) )
			{
				output.push(
					' onkeypress="return false;"' );
			}

			// With Firefox, we need to force it to redraw, otherwise it
			// will remain in the focus state.
			if ( CKEDITOR.env.gecko )
			{
				output.push(
					' onblur="this.style.cssText = this.style.cssText;"' );
			}

			output.push(
					' onkeydown="CKEDITOR.tools.callFunction( ', keyDownFn, ', event, this );"' +
					' onclick="CKEDITOR.tools.callFunction(', clickFn, ', this); return false;">' +
						'<span>' +
							'<span id="' + id + '_text" class="cke_text cke_inline_label">' + this.label + '</span>' +
						'</span>' +
						'<span class=cke_openbutton>' + ( CKEDITOR.env.hc ? '<span>&#9660;</span>' : '' ) + '</span>' +	// BLACK DOWN-POINTING TRIANGLE
					'</a>' +
				'</span>' +
				'</span>' );

			if ( this.onRender )
				this.onRender();

			return instance;
		},

		createPanel : function( editor )
		{
			if ( this._.panel )
				return;

			var panelDefinition = this._.panelDefinition,
				panelBlockDefinition = this._.panelDefinition.block,
				panelParentElement = panelDefinition.parent || CKEDITOR.document.getBody(),
				panel = new CKEDITOR.ui.floatPanel( editor, panelParentElement, panelDefinition ),
				list = panel.addListBlock( this.id, panelBlockDefinition ),
				me = this;

			panel.onShow = function()
				{
					if ( me.className )
						this.element.getFirst().addClass( me.className + '_panel' );

					me.setState( CKEDITOR.TRISTATE_ON );

					list.focus( !me.multiSelect && me.getValue() );

					me._.on = 1;

					if ( me.onOpen )
						me.onOpen();
				};

			panel.onHide = function()
				{
					if ( me.className )
						this.element.getFirst().removeClass( me.className + '_panel' );

					me.setState( CKEDITOR.TRISTATE_OFF );

					me._.on = 0;

					if ( me.onClose )
						me.onClose();
				};

			panel.onEscape = function()
				{
					panel.hide();
					me.document.getById( 'cke_' + me.id ).getFirst().getNext().focus();
				};

			list.onClick = function( value, marked )
				{
					// Move the focus to the main windows, otherwise it will stay
					// into the floating panel, even if invisible, and Safari and
					// Opera will go a bit crazy.
					me.document.getWindow().focus();

					if ( me.onClick )
						me.onClick.call( me, value, marked );

					if ( marked )
						me.setValue( value, me._.items[ value ] );
					else
						me.setValue( '' );

					panel.hide();
				};

			this._.panel = panel;
			this._.list = list;

			panel.getBlock( this.id ).onHide = function()
				{
					me._.on = 0;
					me.setState( CKEDITOR.TRISTATE_OFF );
				};

			if ( this.init )
				this.init();
		},

		setValue : function( value, text )
		{
			this._.value = value;

			var textElement = this.document.getById( 'cke_' + this.id + '_text' );

			if ( !( value || text ) )
			{
				text = this.label;
				textElement.addClass( 'cke_inline_label' );
			}
			else
				textElement.removeClass( 'cke_inline_label' );

			textElement.setHtml( typeof text != 'undefined' ? text : value );
		},

		getValue : function()
		{
			return this._.value || '';
		},

		unmarkAll : function()
		{
			this._.list.unmarkAll();
		},

		mark : function( value )
		{
			this._.list.mark( value );
		},

		hideItem : function( value )
		{
			this._.list.hideItem( value );
		},

		hideGroup : function( groupTitle )
		{
			this._.list.hideGroup( groupTitle );
		},

		showAll : function()
		{
			this._.list.showAll();
		},

		add : function( value, html, text )
		{
			this._.items[ value ] = text || value;
			this._.list.add( value, html, text );
		},

		startGroup : function( title )
		{
			this._.list.startGroup( title );
		},

		commit : function()
		{
			this._.list.commit();
		},

		setState : function( state )
		{
			if ( this._.state == state )
				return;

			this.document.getById( 'cke_' + this.id ).setState( state );

			this._.state = state;
		}
	}
});

CKEDITOR.ui.prototype.addRichCombo = function( name, definition )
{
	this.add( name, CKEDITOR.UI_RICHCOMBO, definition );
};
